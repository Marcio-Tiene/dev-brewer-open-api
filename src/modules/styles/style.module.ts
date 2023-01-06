import { CacheModule, Module } from '@nestjs/common';
import { RouterModule } from '@nestjs/core';
import { MongooseModule } from '@nestjs/mongoose';
import { CommandModule } from 'nestjs-command';
import { StyleController } from './style.controller';
import { Style, StyleSchema } from './style.schema';
import { StyleSeed } from './style.seed';
import { StyleService } from './style.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Style.name, schema: StyleSchema }]),
    RouterModule.register([
      {
        path: 'styles',
        module: StyleModule,
      },
    ]),
    CacheModule.register({ ttl: 60, max: 60 * 60 * 10, isGlobal: true }),
    CommandModule,
  ],
  controllers: [StyleController],
  providers: [StyleService, StyleSeed],
  exports: [StyleModule],
})
export class StyleModule {}
