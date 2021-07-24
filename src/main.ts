import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

import {
  SwaggerModule,
  DocumentBuilder,
  SwaggerCustomOptions,
  SwaggerDocumentOptions,
} from '@nestjs/swagger';
import * as helmet from 'helmet';

const { PORT } = process.env;

async function serverInit() {
  try {
    const app = await NestFactory.create(AppModule);
    const swaggerConfig = new DocumentBuilder()
      .setTitle('DevBrewer Api')
      .setDescription("It's an api to proivide data to Brewery software tools")
      .setContact(
        'Marcio Ricardo Fornazari Tiene',
        'https://www.linkedin.com/in/marcio-fornazari-tiene-940070193/',
        'marciorft@gmail.com',
      )
      .setLicense(
        'MIT',
        'https://github.com/Marcio-Tiene/dev-brewer-api/blob/main/LICENSE',
      )
      .setVersion('1.0')

      .build();

    const swaggerDocumentOptions: SwaggerDocumentOptions = {
      operationIdFactory: (controllerKey: string, methodKey: string) =>
        methodKey,
    };

    const swaggerCustomOptions: SwaggerCustomOptions = {
      swaggerOptions: {
        persistAuthorization: true,
      },
      customSiteTitle: 'DevBrewer Api',
    };

    const document = SwaggerModule.createDocument(
      app,
      swaggerConfig,
      swaggerDocumentOptions,
    );
    SwaggerModule.setup('/api', app, document, swaggerCustomOptions);
    app.enableCors();
    app.use(helmet());
    await app.listen(PORT || 3000);
    console.log(`Server started on port ${PORT}`);
  } catch (err) {
    console.error(`Error Starting server due ${err.message}`);
  }
}
serverInit();
