import { Module } from '@nestjs/common';
import { GrainModule } from './grain/grain.module';

@Module({
  imports: [GrainModule],
})
export class FermentableModule {}
