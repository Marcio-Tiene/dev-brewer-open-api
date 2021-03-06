import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { APP_GUARD } from '@nestjs/core';
import { MongooseModule } from '@nestjs/mongoose';
import { ApiKeyGuard } from '../../src/guards/api-key.guard';
import { FermentableModule } from '../../src/modules/fermentable/fermentable.module';

const MongoUrl = (process.env.MONGODOCKER || process.env.MONGODB) as string;
@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath: ['.env'], isGlobal: true }),
    MongooseModule.forRoot(MongoUrl),
    FermentableModule,
  ],
  providers: [{ provide: APP_GUARD, useClass: ApiKeyGuard }],
})
export class AppTestModule {}
