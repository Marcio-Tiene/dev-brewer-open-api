import { Module } from '@nestjs/common';
import { GrainService } from './grain.service';
import { GrainController } from './grain.controller';
import { Grain, GrainSchema } from './grain.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Grain.name, schema: GrainSchema }]),
  ],
  controllers: [GrainController],
  providers: [GrainService],
  exports: [GrainModule],
})
export class GrainModule {}
