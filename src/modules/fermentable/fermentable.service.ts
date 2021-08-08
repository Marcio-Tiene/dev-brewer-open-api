import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateFermentableDto } from './dto/create-fermentable.dto';
import { UpdateFermentableDto } from './dto/update-fermentable.dto';
import { Fermentable, FermentableDocument } from './fermentable.schema';
import { Model } from 'mongoose';

@Injectable()
export class FermentableService {
  constructor(
    @InjectModel(Fermentable.name)
    private readonly fermentableModel: Model<FermentableDocument>,
  ) {}

  findAll(): Promise<FermentableDocument[] | []> {
    const fermentables = this.fermentableModel.find().exec();

    return fermentables;
  }

  findOne(_id: string): Promise<FermentableDocument | Record<string, never>> {
    return this.fermentableModel.findById(_id).exec();
  }

  async create(
    createFermentableDto: CreateFermentableDto,
  ): Promise<FermentableDocument> {
    const createdFermentable = new this.fermentableModel(createFermentableDto);

    return await createdFermentable.save();
  }

  update(
    _id: string,
    updateFermentableDto: UpdateFermentableDto,
  ): Promise<FermentableDocument> {
    return this.fermentableModel
      .findOneAndUpdate({ _id }, updateFermentableDto)
      .exec();
  }

  remove(_id: string): Promise<FermentableDocument> {
    return this.fermentableModel.findOneAndDelete({ _id }).exec();
  }

  async insertMany(
    fermentables: Fermentable[],
  ): Promise<FermentableDocument[] | []> {
    return await this.fermentableModel.insertMany(fermentables);
  }
}
