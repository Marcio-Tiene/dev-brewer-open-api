import { NestFactory } from '@nestjs/core';
import { CommandModule, CommandService } from 'nestjs-command';
import { AppModule } from './app.module';

async function bootstrap() {
  const MongoUrl = process.env.MONGODB as string;
  const app = await NestFactory.createApplicationContext(
    AppModule.register(MongoUrl),
    {
      logger: ['error'], // only errors
    },
  );
  app.select(CommandModule).get(CommandService).exec();
}
bootstrap();
