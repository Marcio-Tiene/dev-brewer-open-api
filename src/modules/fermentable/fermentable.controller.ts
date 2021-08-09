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
import { FermentableService } from './fermentable.service';
import { CreateFermentableDto } from './dto/create-fermentable.dto';
import { UpdateFermentableDto } from './dto/update-fermentable.dto';
import { ApiExcludeEndpoint, ApiSecurity, ApiTags } from '@nestjs/swagger';
import { AdminKeyGuard } from 'src/guards/admin-key.guard';

const { PUBLIC_API_KEY_NAME, ADMIN_API_KEY_NAME, NODE_ENV } = process.env;
const isProdEnv = NODE_ENV === 'production';

@ApiTags('Fermentables')
@ApiSecurity(PUBLIC_API_KEY_NAME)
@Controller()
@UseInterceptors(CacheInterceptor)
export class FermentableController {
  constructor(
    @Inject(FermentableService)
    private readonly fermentableService: FermentableService,
  ) {}

  @ApiExcludeEndpoint(isProdEnv)
  @UseGuards(AdminKeyGuard)
  @ApiSecurity(ADMIN_API_KEY_NAME)
  @Post()
  create(@Body() createFermentableDto: CreateFermentableDto) {
    return this.fermentableService.create(createFermentableDto);
  }

  @Get()
  findAll() {
    return this.fermentableService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.fermentableService.findOne(id);
  }

  @ApiExcludeEndpoint(isProdEnv)
  @UseGuards(AdminKeyGuard)
  @ApiSecurity(ADMIN_API_KEY_NAME)
  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateFermentableDto: UpdateFermentableDto,
  ) {
    return this.fermentableService.update(id, updateFermentableDto);
  }
  @ApiExcludeEndpoint(isProdEnv)
  @UseGuards(AdminKeyGuard)
  @ApiSecurity(ADMIN_API_KEY_NAME)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.fermentableService.remove(id);
  }
}
