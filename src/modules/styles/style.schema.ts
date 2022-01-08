import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { Document } from 'mongoose';
import * as mongoosePaginate from 'mongoose-paginate';
import { bjcp2015CategoriesArray } from 'src/constants/bjcp2015';

export type StyleDocument = Style & Document;

@Schema({ timestamps: true, validateBeforeSave: true })
export class Style {
  @ApiProperty()
  @Prop()
  name!: string;

  @ApiProperty()
  @Prop()
  type!: string;

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

  @ApiProperty({
    enum: bjcp2015CategoriesArray,
  })
  @Prop()
  category!: TBjcp2015Categories;

  @ApiProperty()
  @Prop()
  'carb-min': number;

  @ApiProperty()
  @Prop()
  'fg-max': number;

  @ApiProperty()
  @Prop()
  'og-min': number;

  @ApiProperty()
  @Prop()
  'style-letter': string;

  @ApiProperty()
  @Prop()
  'abv-min': number;

  @ApiProperty()
  @Prop()
  'fg-min': number;

  @ApiProperty()
  @Prop()
  'category-number': string;

  @ApiProperty()
  @Prop()
  'carb-max': number;

  @ApiProperty()
  @Prop()
  'ibu-max': number;

  @ApiProperty()
  @Prop()
  ingredients!: string;

  @ApiProperty()
  @Prop()
  examples!: string;

  @ApiProperty()
  @Prop()
  'og-max': number;

  @ApiProperty()
  @Prop()
  'color-min': number;

  @ApiProperty()
  @Prop()
  'abv-max': number;

  @ApiProperty()
  @Prop()
  'color-max': number;

  @ApiProperty()
  @Prop()
  profile!: string;

  @ApiProperty()
  @Prop()
  'ibu-min': number;
}

export const StyleSchema =
  SchemaFactory.createForClass(Style).plugin(mongoosePaginate);
