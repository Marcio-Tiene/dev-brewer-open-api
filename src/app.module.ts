import { DynamicModule, Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { APP_GUARD } from '@nestjs/core';
import { MongooseModule } from '@nestjs/mongoose';
import { ApiKeyGuard } from './guards/api-key.guard';
import { FermentableModule } from './modules/fermentable/fermentable.module';

const MongoUrl = (process.env.MONGODOCKER || process.env.MONGODB) as string;
// @Module({
//   imports: [
//     ConfigModule.forRoot({ envFilePath: ['.env'], isGlobal: true }),
//     MongooseModule.forRoot(MongoUrl),
//     FermentableModule,
//   ],
//   providers: [{ provide: APP_GUARD, useClass: ApiKeyGuard }],
// })
// export class AppModule {}

@Module({})
export class AppModule {
  static register(mongoUri: string = MongoUrl): DynamicModule {
    return {
      module: AppModule,
      imports: [
        ConfigModule.forRoot({ envFilePath: ['.env'], isGlobal: true }),
        MongooseModule.forRoot(mongoUri),
        FermentableModule,
      ],
      providers: [{ provide: APP_GUARD, useClass: ApiKeyGuard }],
    };
  }
}
