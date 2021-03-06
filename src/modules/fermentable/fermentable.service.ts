import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateFermentableDto } from './dto/create-fermentable.dto';
import { UpdateFermentableDto } from './dto/update-fermentable.dto';
import { Fermentable, FermentableDocument } from './fermentable.schema';
import { PaginateModel, PaginateResult } from 'mongoose';

@Injectable()
export class FermentableService {
  constructor(
    @InjectModel(Fermentable.name)
    private readonly fermentableModel: PaginateModel<FermentableDocument>,
  ) {}

  async find(query?: FermentablesQuery): Promise<PaginateResult<Fermentable>> {
    const { page = '1', limit = 10, ...dbquery } = query as FermentablesQuery;

    const { name: queryStringName } = dbquery || {};

    let finalQuery: any = { ...dbquery };

    const limitRange = limit > 100 ? '100' : limit;

    if (queryStringName) {
      finalQuery = {
        ...finalQuery,
        name: { $regex: queryStringName, $options: 'i' },
      };
    }

    const fermentables = await this.fermentableModel.paginate(finalQuery, {
      page: Number(page),
      limit: Number(limitRange),
    });

    return fermentables;
  }

  findOne(_id: string): Promise<FermentableDocument | null> {
    return this.fermentableModel.findById(_id).exec();
  }

  async create(
    createFermentableDto: CreateFermentableDto | CreateFermentableDto[],
  ): Promise<FermentableDocument | FermentableDocument[]> {
    if (!Array.isArray(createFermentableDto)) {
      const createdFermentable = new this.fermentableModel(
        createFermentableDto,
      );

      return await createdFermentable.save();
    }

    const createdFermentables = await this.fermentableModel.create(
      createFermentableDto,
    );

    return createdFermentables;
  }

  update(
    _id: string,
    updateFermentableDto: UpdateFermentableDto,
  ): Promise<FermentableDocument | null> {
    return this.fermentableModel
      .findOneAndUpdate({ _id }, updateFermentableDto)
      .exec();
  }

  remove(_id: string): Promise<FermentableDocument | null> {
    return this.fermentableModel.findOneAndDelete({ _id }).exec();
  }
  async deleteAll() {
    return await this.fermentableModel.deleteMany({});
  }

  async insertMany(
    fermentables: Fermentable[],
  ): Promise<FermentableDocument[] | []> {
    return await this.fermentableModel.insertMany(fermentables);
  }
}
