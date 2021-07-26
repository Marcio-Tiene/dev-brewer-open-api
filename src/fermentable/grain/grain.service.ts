import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, PaginateModel, PaginateResult } from 'mongoose';
import { CreateFermentableDto } from '../dto/create-fermentable.dto';
import { UpdateFermentableDto } from '../dto/update-fermentable.dto';
import { Grain, GrainDocument } from './grain.schema';
import insertedGrains from '../../InitialData/Fermentables/grains';

@Injectable()
export class GrainService {
  constructor(
    @InjectModel(Grain.name) private grainModel: PaginateModel<GrainDocument>,
  ) {}
  igrains = insertedGrains;
  async create(
    createFermentableDto: CreateFermentableDto,
  ): Promise<GrainDocument> {
    const createdGrain = new this.grainModel(createFermentableDto);

    return await createdGrain.save();
  }

  async findAll({ limit, page }): Promise<PaginateResult<GrainDocument>> {
    return await this.grainModel.paginate({
      limit: Number(limit),
      page: Number(page),
    });
  }

  findOne(_id: string) {
    return this.grainModel.findById(_id).exec();
  }

  update(_id: string, updateFermentableDto: UpdateFermentableDto) {
    return this.grainModel
      .findOneAndUpdate({ _id }, updateFermentableDto)
      .exec();
  }

  remove(_id: string) {
    return this.grainModel.findOneAndDelete({ _id }).exec();
  }
}
