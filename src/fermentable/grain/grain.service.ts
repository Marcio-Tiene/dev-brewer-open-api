import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateFermentableDto } from '../dto/create-fermentable.dto';
import { UpdateFermentableDto } from '../dto/update-fermentable.dto';
import { Grain, GrainDocument } from './grain.schema';

@Injectable()
export class GrainService {
  constructor(
    @InjectModel(Grain.name) private grainModel: Model<GrainDocument>,
  ) {}
  async create(
    createFermentableDto: CreateFermentableDto,
  ): Promise<GrainDocument> {
    const createdGrain = new this.grainModel({
      name: 'Acid Malt',
      potential: 1.027,
      yield: 0.587,
      'coarse-fine-diff': 0.015,
      moisture: 0.04,
      color: 3,
      'recommend-mash': true,
      'add-after-boil': false,
      'diastatic-power': 0,
      'max-in-batch': 0.1,
      protein: 0.06,
      notes:
        'Acid malt contains acids from natural lactic acids. Used by German brewers to adjust malt PH without chemicals to adhere to German purity laws. Also enhances the head retention.',
    });

    return await createdGrain.save();
  }

  findAll(): Promise<CreateFermentableDto[]> {
    return this.grainModel.find().exec();
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
