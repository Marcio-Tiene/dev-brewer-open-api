import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { Document } from 'mongoose';
import * as mongoosePaginate from 'mongoose-paginate';
import { fermentablesTypesArray } from 'src/constants/fermentables';

export type FermentableDocument = Fermentable & Document;

@Schema({ timestamps: true, validateBeforeSave: true })
export class Fermentable {
  @ApiProperty()
  @Prop()
  name!: string;

  @ApiProperty({
    enum: fermentablesTypesArray,
  })
  @Prop()
  type!: FermentablesTypes;

  @ApiProperty()
  @Prop()
  potential!: number;

  @ApiProperty()
  @Prop()
  yield!: number;

  @ApiProperty()
  @Prop()
  'coarse-fine-diff': number;

  @ApiProperty()
  @Prop()
  moisture!: number;

  @ApiProperty()
  @Prop()
  color!: number;

  @ApiProperty()
  @Prop()
  'recommend-mash': boolean;

  @ApiProperty()
  @Prop()
  'add-after-boil': boolean;

  @ApiProperty()
  @Prop()
  'diastatic-power': number;

  @ApiProperty()
  @Prop()
  'max-in-batch': number;

  @ApiProperty()
  @Prop()
  protein!: number;

  @ApiProperty()
  @Prop()
  notes!: string;
}

export const FermentableSchema =
  SchemaFactory.createForClass(Fermentable).plugin(mongoosePaginate);
