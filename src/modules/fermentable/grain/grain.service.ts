import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateFermentableDto } from '../dto/create-fermentable.dto';
import { UpdateFermentableDto } from '../dto/update-fermentable.dto';
import { Grain, GrainDocument } from './grain.schema';
import insertedGrains from '../../../InitialData/Fermentables/grains';
import { Model } from 'mongoose';
import { ApiRequestTimeoutResponse } from '@nestjs/swagger';

@Injectable()
export class GrainService {
  constructor(
    @InjectModel(Grain.name) private readonly grainModel: Model<GrainDocument>,
  ) {}
  igrains = insertedGrains;

  findAll(): Promise<GrainDocument[] | []> {
    const grains = this.grainModel.find().exec();

    return grains;
  }

  findOne(_id: string): Promise<GrainDocument | Record<string, never>> {
    return this.grainModel.findById(_id).exec();
  }

  async create(
    createFermentableDto: CreateFermentableDto,
  ): Promise<GrainDocument> {
    const createdGrain = new this.grainModel(createFermentableDto);

    return await createdGrain.save();
  }

  update(
    _id: string,
    updateFermentableDto: UpdateFermentableDto,
  ): Promise<GrainDocument> {
    return this.grainModel
      .findOneAndUpdate({ _id }, updateFermentableDto)
      .exec();
  }

  remove(_id: string): Promise<GrainDocument> {
    return this.grainModel.findOneAndDelete({ _id }).exec();
  }

  async insertMany(grains: Grain[]): Promise<GrainDocument[] | []> {
    return await this.grainModel.insertMany(grains);
  }
}
