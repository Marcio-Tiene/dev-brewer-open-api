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
import { ApiExcludeEndpoint, ApiSecurity, ApiTags } from '@nestjs/swagger';
import * as dotenv from 'dotenv';

const data = dotenv.config();

const apiKey = data.parsed.API_KEY_NAME;

@ApiTags('Fermentables/Grains')
@ApiSecurity(apiKey)
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
  findAll() {
    return this.grainService.findAll();
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
