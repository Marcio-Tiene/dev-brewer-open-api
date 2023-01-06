import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateStyleDto } from './dto/create-style.dto';
import { UpdateStyleDto } from './dto/update-style.dto';
import { Style, StyleDocument } from './style.schema';
import { PaginateModel, PaginateResult } from 'mongoose';

@Injectable()
export class StyleService {
  constructor(
    @InjectModel(Style.name)
    private readonly styleModel: PaginateModel<StyleDocument>,
  ) {}

  async find(query?: StylesQuery): Promise<PaginateResult<Style>> {
    const { page = '1', limit = 10, ...dbquery } = query as StylesQuery;

    const { name: queryStringName } = dbquery || {};

    let finalQuery: any = { ...dbquery };

    const limitRange = limit > 200 ? '200' : limit;

    if (queryStringName) {
      finalQuery = {
        ...finalQuery,
        name: { $regex: queryStringName, $options: 'i' },
      };
    }

    const styles = await this.styleModel.paginate(finalQuery, {
      page: Number(page),
      limit: Number(limitRange),
      select: '-__v -createdAt -updatedAt',
    });

    return styles;
  }

  findOne(_id: string): Promise<StyleDocument | null> {
    return this.styleModel.findById(_id).exec();
  }

  async create(
    createStyleDto: CreateStyleDto | CreateStyleDto[],
  ): Promise<StyleDocument | StyleDocument[]> {
    if (!Array.isArray(createStyleDto)) {
      const createdStyle = new this.styleModel(createStyleDto);

      return await createdStyle.save();
    }

    const createdStyles = await this.styleModel.create(createStyleDto);

    return createdStyles;
  }

  update(
    _id: string,
    updateStyleDto: UpdateStyleDto,
  ): Promise<StyleDocument | null> {
    return this.styleModel.findOneAndUpdate({ _id }, updateStyleDto).exec();
  }

  remove(_id: string): Promise<StyleDocument | null> {
    return this.styleModel.findOneAndDelete({ _id }).exec();
  }
  async deleteAll() {
    return await this.styleModel.deleteMany({});
  }

  async insertMany(styles: Style[]): Promise<StyleDocument[] | []> {
    return await this.styleModel.insertMany(styles);
  }
}
