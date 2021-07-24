import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { GrainService } from './grain.service';
import { CreateFermentableDto } from '../dto/create-fermentable.dto';
import { UpdateFermentableDto } from '../dto/update-fermentable.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('fermentables')
@Controller('fermentables/grains')
export class GrainController {
  constructor(private readonly grainService: GrainService) {}

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

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateFermentableDto: UpdateFermentableDto,
  ) {
    return this.grainService.update(id, updateFermentableDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.grainService.remove(id);
  }
}
