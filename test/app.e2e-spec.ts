import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';
import MongoMemoryServer from 'mongodb-memory-server-core';

import * as dotenv from 'dotenv';
const data = dotenv.config();

const apiKeyHeader = data.parsed?.PUBLIC_API_KEY_NAME || 'test-header';
const apiKey = data.parsed?.PUBLIC_API_KEY_VALUE || 'test-sercret';

describe('AppController (e2e)', () => {
  let app: INestApplication;
  let mongod: MongoMemoryServer;

  beforeAll(async () => {
    mongod = await MongoMemoryServer.create({
      instance: {
        dbName: 'app-e2e-test',
      },
    });
  });

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule.register(mongod.getUri())],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  afterEach(async () => {
    await app.close();
  });

  afterAll(async () => {
    await mongod.stop();
  });
  it('/ (GET)', () => {
    return request(app.getHttpServer())
      .get('/fermentables')
      .set(apiKeyHeader, apiKey)
      .expect(200)
      .expect('Hello World!');
  });
});
