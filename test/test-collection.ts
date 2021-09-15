import { Mongoose } from 'mongoose';
import grains from '../src/seed-data/Fermentables/grains';

const id = () => new Mongoose().Types.ObjectId();

export const fermentables = [
  ...grains.map((grain) => ({ ...grain, _id: id() })),
];
