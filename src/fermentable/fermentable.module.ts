import { Module } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { GrainModule } from './grain/grain.module';

@Module({
  imports: [GrainModule],
  exports: [GrainModule],
})
export class FermentableModule {}
