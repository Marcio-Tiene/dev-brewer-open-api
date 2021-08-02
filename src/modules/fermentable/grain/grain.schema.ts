import { Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Fermentable } from '../fermentable.schema';

export type GrainDocument = Grain & Document;

@Schema({ timestamps: true, validateBeforeSave: true })
export class Grain extends Fermentable {}

export const GrainSchema = SchemaFactory.createForClass(Grain);
