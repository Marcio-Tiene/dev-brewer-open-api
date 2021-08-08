import { CacheModule, Module } from '@nestjs/common';
import { RouterModule } from '@nestjs/core';
import { MongooseModule } from '@nestjs/mongoose';
import { CommandModule } from 'nestjs-command';
import { FermentableController } from './fermentable.controller';
import { Fermentable, FermentableSchema } from './fermentable.schema';
import { FermentableSeed } from './fermentable.seed';
import { FermentableService } from './fermentable.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Fermentable.name, schema: FermentableSchema },
    ]),
    RouterModule.register([
      {
        path: 'fermentables',
        module: FermentableModule,
      },
    ]),
    CacheModule.register({ ttl: 60, max: 60 * 60 * 10 }),
    CommandModule,
  ],
  controllers: [FermentableController],
  providers: [FermentableService, FermentableSeed],
  exports: [FermentableModule],
})
export class FermentableModule {}
