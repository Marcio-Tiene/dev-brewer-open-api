import { CacheModule, Module } from '@nestjs/common';
import { GrainService } from './grain.service';
import { GrainController } from './grain.controller';
import { Grain, GrainSchema } from './grain.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { CommandModule } from 'nestjs-command';
import { GrainCommand } from './grain.command';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Grain.name, schema: GrainSchema }]),
    CacheModule.register({ ttl: 100000000, max: 10000000000 }),
    CommandModule,
  ],
  controllers: [GrainController],
  providers: [GrainService, GrainCommand],
  exports: [GrainModule],
})
export class GrainModule {}
