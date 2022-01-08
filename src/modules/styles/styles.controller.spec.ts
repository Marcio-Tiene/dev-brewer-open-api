import { CacheModule } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Test, TestingModule } from '@nestjs/testing';
import MongoMemoryServer from 'mongodb-memory-server-core';
import { StyleController } from './style.controller';
import { Style, StyleSchema } from './style.schema';
import { StyleService } from './style.service';
import * as testCollections from '../../../test/test.collection';
import { RouterModule } from '@nestjs/core';
import { CommandModule } from 'nestjs-command';
import { StyleModule } from './style.module';

describe('StyleController', () => {
  let controller: StyleController;
  let service: StyleService;
  let mongod: MongoMemoryServer;
  let module: TestingModule;

  // beforeAll(async () => {
  //   mongod = await MongoMemoryServer.create({
  //     instance: {
  //       dbName: 'styles-controller-test',
  //     },
  //   });
  //   module = await Test.createTestingModule({
  //     imports: [
  //       MongooseModule.forFeature([{ name: Style.name, schema: StyleSchema }]),
  //       MongooseModule.forRoot(mongod.getUri()),
  //       RouterModule.register([
  //         {
  //           path: 'styles',
  //           module: StyleModule,
  //         },
  //       ]),
  //       CacheModule.register({ ttl: 0, max: 0 }),
  //       CommandModule,
  //     ],
  //     controllers: [StyleController],

  //     providers: [StyleService],
  //   }).compile();

  //   service = module.get<StyleService>(StyleService);
  //   controller = module.get<StyleController>(StyleController);
  // });
  // beforeEach(async () => {
  //   await service.create(testCollections.styles);
  // });
  // afterEach(async () => {
  //   await service.deleteAll();
  // });

  // afterAll(async () => {
  //   await module.close();
  //   await mongod.stop();
  // });

  // it('should be defined', async () => {
  //   expect(service).toBeDefined();
  //   expect(controller).toBeDefined();
  // });
});
