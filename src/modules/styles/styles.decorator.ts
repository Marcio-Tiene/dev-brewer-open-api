import { applyDecorators } from '@nestjs/common';
import { ApiQuery } from '@nestjs/swagger';
import { bjcp2015CategoriesArray } from 'src/constants/bjcp2015';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const response = {
  docs: [
    {
      _id: '61102d06ec906a47d5856cf5',
      name: 'Acid Malt',
      type: 'Grain',
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
      __v: 0,
      createdAt: '2021-08-08T19:14:14.266Z',
      updatedAt: '2021-08-08T19:14:14.266Z',
    },
  ],
  total: 64,
  limit: 1,
  offset: 0,
  page: 1,
  pages: 64,
};

export function StylesQuery() {
  return applyDecorators(
    ApiQuery({
      name: 'type',
      required: false,
      enum: ['Grain', 'Sugar', 'Extract', 'Dry Extract', 'Adjunct'],
    }),

    ApiQuery({
      name: 'category',
      required: false,
      enum: bjcp2015CategoriesArray,
    }),
    ApiQuery({
      name: 'name',
      required: false,
      type: String,
    }),

    ApiQuery({
      name: 'page',
      required: false,
      type: Number,
    }),
    ApiQuery({
      name: 'limit',
      required: false,
      type: Number,
    }),
  );
}
