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
  Inject,
  UseGuards,
} from '@nestjs/common';
import { GrainService } from './grain.service';
import { CreateFermentableDto } from '../dto/create-fermentable.dto';
import { UpdateFermentableDto } from '../dto/update-fermentable.dto';
import { ApiExcludeEndpoint, ApiSecurity, ApiTags } from '@nestjs/swagger';
import { AdminKeyGuard } from 'src/guards/admin-key.guard';

const { PUBLIC_API_KEY_NAME, ADMIN_API_KEY_NAME, NODE_ENV } = process.env;
const isProdEnv = NODE_ENV === 'production';

@ApiTags('Fermentables/Grains')
@ApiSecurity(PUBLIC_API_KEY_NAME)
@Controller()
@UseInterceptors(CacheInterceptor)
export class GrainController {
  constructor(
    @Inject(GrainService) private readonly grainService: GrainService,
  ) {}

  @ApiExcludeEndpoint(isProdEnv)
  @UseGuards(AdminKeyGuard)
  @ApiSecurity(ADMIN_API_KEY_NAME)
  @Post()
  create(@Body() createFermentableDto: CreateFermentableDto) {
    return this.grainService.create(createFermentableDto);
  }

  @Get()
  findAll() {
    console.log(process.env);
    return this.grainService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.grainService.findOne(id);
  }
  @ApiExcludeEndpoint(isProdEnv)
  @UseGuards(AdminKeyGuard)
  @ApiSecurity(ADMIN_API_KEY_NAME)
  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateFermentableDto: UpdateFermentableDto,
  ) {
    return this.grainService.update(id, updateFermentableDto);
  }
  @ApiExcludeEndpoint(isProdEnv)
  @UseGuards(AdminKeyGuard)
  @ApiSecurity(ADMIN_API_KEY_NAME)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.grainService.remove(id);
  }
}
