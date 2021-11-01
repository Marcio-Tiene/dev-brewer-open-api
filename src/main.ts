import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

import {
  SwaggerModule,
  DocumentBuilder,
  SwaggerCustomOptions,
  SwaggerDocumentOptions,
} from '@nestjs/swagger';
import * as helmet from 'helmet';

const { PORT, PUBLIC_API_KEY_NAME } = process.env;

async function serverInit() {
  try {
    const app = await NestFactory.create(AppModule.register());
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
      .addApiKey(
        { type: 'apiKey', name: PUBLIC_API_KEY_NAME, in: 'header' },
        PUBLIC_API_KEY_NAME,
      )

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
    SwaggerModule.setup('/v1/api', app, document, swaggerCustomOptions);
    app.enableCors();
    app.use(helmet());
    await app.listen(PORT || 4500);
    console.log(`Server started on port ${PORT || '4500'}`);
  } catch (err: any) {
    console.error(`Error Starting server due ${err?.message}`);
  }
}
serverInit();
