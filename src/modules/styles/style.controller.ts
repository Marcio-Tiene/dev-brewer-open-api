import {
  Controller,
  Get,
  Param,
  UseInterceptors,
  CacheInterceptor,
  Inject,
  Req,
} from '@nestjs/common';
import { StyleService } from './style.service';

import { ApiSecurity, ApiTags } from '@nestjs/swagger';
import { Request } from 'express';
import { StylesQuery } from './styles.decorator';

const { PUBLIC_API_KEY_NAME } = process.env;

@ApiTags('Styles')
@ApiSecurity(PUBLIC_API_KEY_NAME || '')
@Controller()
@UseInterceptors(CacheInterceptor)
export class StyleController {
  constructor(
    @Inject(StyleService)
    private readonly styleService: StyleService,
  ) {}

  @Get()
  @StylesQuery()
  find(@Req() req: Request<StylesQuery>) {
    const query = req.query;

    return this.styleService.find(query);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.styleService.findOne(id);
  }
}
