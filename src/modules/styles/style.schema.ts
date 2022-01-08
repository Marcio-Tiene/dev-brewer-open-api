import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { Document } from 'mongoose';
import * as mongoosePaginate from 'mongoose-paginate';

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
    enum: [
      'Alternative Fermentables Beer',
      'Amber And Brown American Beer',
      'Amber Bitter European Beer',
      'Amber Malty European Lager',
      'American Porter And Stout',
      'American Wild Ale',
      'Belgian Ale',
      'British Bitter',
      'Brown British Beer',
      'Czech Lager',
      'Dark British Beer',
      'Dark European Lager',
      'European Sour Ale',
      'Fruit Beer',
      'German Wheat Beer',
      'Historic Beer',
      'International Lager',
      'Ipa',
      'Irish Beer',
      'Pale American Ale',
      'Pale Bitter European Beer',
      'Pale Commonwealth Beer',
      'Pale Malty European Lager',
      'Scottish Ale',
      'Smoked Beer',
      'Specialty Beer',
      'Spiced Beer',
      'Standard American Beer',
      'Strong American Ale',
      'Strong Belgian Ale',
      'Strong British Ale',
      'Strong European Beer',
      'Trappist Ale',
      'Wood Beer',
    ],
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
