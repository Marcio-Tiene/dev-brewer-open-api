import { Module } from '@nestjs/common';
import { GrainModule } from './grain/grain.module';

@Module({
  imports: [GrainModule],
  exports: [GrainModule],
})
export class FermentableModule {}
