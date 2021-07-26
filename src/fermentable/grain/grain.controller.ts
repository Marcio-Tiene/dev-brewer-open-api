import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseInterceptors,
  CacheInterceptor,
} from '@nestjs/common';
import { GrainService } from './grain.service';
import { CreateFermentableDto } from '../dto/create-fermentable.dto';
import { UpdateFermentableDto } from '../dto/update-fermentable.dto';
import {
  ApiExcludeEndpoint,
  ApiParam,
  ApiQuery,
  ApiTags,
} from '@nestjs/swagger';
import { link } from 'fs';

@ApiTags('Fermentables/Grains')
@Controller('fermentables/grains')
@UseInterceptors(CacheInterceptor)
export class GrainController {
  constructor(private readonly grainService: GrainService) {}

  @ApiExcludeEndpoint()
  @Post()
  create(@Body() createFermentableDto: CreateFermentableDto) {
    return this.grainService.create(createFermentableDto);
  }

  @Get()
  @ApiQuery({ name: 'limit', required: false, example: '1000' })
  @ApiQuery({ name: 'page', required: false, example: '1' })
  findAll(@Param('limit') limit: string, @Param('page') page: string) {
    return this.grainService.findAll({ limit, page });
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.grainService.findOne(id);
  }
  @ApiExcludeEndpoint()
  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateFermentableDto: UpdateFermentableDto,
  ) {
    return this.grainService.update(id, updateFermentableDto);
  }
  @ApiExcludeEndpoint()
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.grainService.remove(id);
  }
}
