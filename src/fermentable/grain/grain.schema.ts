import { Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Fermentable } from '../fermentable.schema';
import * as mongoosePaginate from 'mongoose-paginate';

export type GrainDocument = Grain & Document;

@Schema()
export class Grain extends Fermentable {}

export const GrainSchema =
  SchemaFactory.createForClass(Grain).plugin(mongoosePaginate);
