import { applyDecorators } from '@nestjs/common';
import {
  ApiOkResponse,
  ApiProperty,
  ApiQuery,
  ApiResponse,
} from '@nestjs/swagger';
import { CreateFermentableDto } from './dto/create-fermentable.dto';

class FermentableResponse extends CreateFermentableDto {
  @ApiProperty()
  _id: string;
}

export function FermentablesQuery() {
  return applyDecorators(
    ApiQuery({
      name: 'type',
      required: false,
      enum: ['Grain', 'Sugar', 'Extract', 'Dry Extract', 'Adjunct'],
    }),
    ApiQuery({
      name: 'name',
      required: false,
      type: String,
    }),
    ApiQuery({
      name: 'potential',
      required: false,
      type: Number,
    }),
    ApiOkResponse({ isArray: true, type: FermentableResponse }),
  );
}
