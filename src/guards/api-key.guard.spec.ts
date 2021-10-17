import { INestApplication } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { ApiKeyGuard } from './api-key.guard';
import * as request from 'supertest';

import * as dotenv from 'dotenv';

import { TestController } from '../../test/fixtures/test-controller';
import { APP_GUARD } from '@nestjs/core';
const data = dotenv.config();

const apiKeyHeader = data.parsed?.PUBLIC_API_KEY_NAME || 'test-header';
const apiKey = data.parsed?.PUBLIC_API_KEY_VALUE || 'test-sercret';

describe('ApiKeyGuard', () => {
  let app: INestApplication;

  let module: TestingModule;

  beforeAll(async () => {
    module = await Test.createTestingModule({
      imports: [TestController],
      controllers: [TestController],
      providers: [{ provide: APP_GUARD, useClass: ApiKeyGuard }],
    }).compile();
  });

  beforeEach(async () => {
    app = module.createNestApplication();
    await app.init();
  });

  afterEach(async () => {
    await app.close();
  });

  afterAll(async () => {
    await module.close();
  });
  it('should be defined', () => {
    expect(new ApiKeyGuard()).toBeDefined();
  });

  it('should not let me pass', async () => {
    return await request(app.getHttpServer()).get('/').expect(403);
  });
  it('should let me pass', async () => {
    return await request(app.getHttpServer())
      .get('/')
      .set({
        [apiKeyHeader]: apiKey,
      })
      .expect(200);
  });
});
