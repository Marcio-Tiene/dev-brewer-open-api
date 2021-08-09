import {
  Controller,
  Get,
  Param,
  UseInterceptors,
  CacheInterceptor,
  Inject,
  Req,
} from '@nestjs/common';
import { FermentableService } from './fermentable.service';

import { ApiSecurity, ApiTags } from '@nestjs/swagger';
import { Request } from 'express';
import { UpdateFermentableDto } from './dto/update-fermentable.dto';
import { FermentablesQuery } from './fermentables.decorator';

const { PUBLIC_API_KEY_NAME } = process.env;

@ApiTags('Fermentables')
@ApiSecurity(PUBLIC_API_KEY_NAME)
@Controller()
@UseInterceptors(CacheInterceptor)
export class FermentableController {
  constructor(
    @Inject(FermentableService)
    private readonly fermentableService: FermentableService,
  ) {}

  @Get()
  @FermentablesQuery()
  find(@Req() req: Request) {
    const query: UpdateFermentableDto = req.query;

    return this.fermentableService.find(query);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.fermentableService.findOne(id);
  }
}
