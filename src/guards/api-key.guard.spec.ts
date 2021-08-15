import { INestApplication } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';
import { Test } from '@nestjs/testing';
import { AppModule } from '../../src/app.module';
import { ApiKeyGuard } from './api-key.guard';
import * as request from 'supertest';

import * as dotenv from 'dotenv';
const data = dotenv.config();

const apiKeyHeader = data.parsed.PUBLIC_API_KEY_NAME;
const apiKey = data.parsed.PUBLIC_API_KEY_VALUE;

async function createTestModule(guard) {
  return await Test.createTestingModule({
    imports: [AppModule],
    providers: [
      {
        provide: APP_GUARD,
        useValue: guard,
      },
    ],
  }).compile();
}

describe('ApiKeyGuard', () => {
  let app: INestApplication;
  beforeEach(async () => {
    app = (await createTestModule(new ApiKeyGuard())).createNestApplication();
    await app.init();
  });
  it('should be defined', () => {
    expect(new ApiKeyGuard()).toBeDefined();
  });

  it('should not let me pass', async () => {
    return await request(app.getHttpServer()).get('/fermentables').expect(403);
  });
  it('should let me pass', async () => {
    return await request(app.getHttpServer())
      .get('/fermentables')
      .set({
        [apiKeyHeader]: apiKey,
      })
      .expect(200);
  });
});
