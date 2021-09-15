import { CacheModule } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Test, TestingModule } from '@nestjs/testing';
import MongoMemoryServer from 'mongodb-memory-server-core';
import { FermentableController } from './fermentable.controller';
import { Fermentable, FermentableSchema } from './fermentable.schema';
import { FermentableService } from './fermentable.service';
import * as testCollections from '../../../test/test.collection';
import { RouterModule } from '@nestjs/core';
import { CommandModule } from 'nestjs-command';
import { FermentableModule } from './fermentable.module';

describe('FermentableController', () => {
  let controller: FermentableController;
  let service: FermentableService;
  let mongod: MongoMemoryServer;
  let module: TestingModule;

  beforeAll(async () => {
    mongod = await MongoMemoryServer.create({
      instance: {
        dbName: 'controller-test',
      },
    });
    module = await Test.createTestingModule({
      imports: [
        MongooseModule.forFeature([
          { name: Fermentable.name, schema: FermentableSchema },
        ]),
        MongooseModule.forRoot(mongod.getUri()),
        RouterModule.register([
          {
            path: 'fermentables',
            module: FermentableModule,
          },
        ]),
        CacheModule.register({ ttl: 0, max: 0 }),
        CommandModule,
      ],
      controllers: [FermentableController],

      providers: [FermentableService],
    }).compile();

    service = module.get<FermentableService>(FermentableService);
    controller = module.get<FermentableController>(FermentableController);
  });
  beforeEach(async () => {
    await service.create(testCollections.fermentables);
  });
  afterEach(async () => {
    await service.deleteAll();
  });

  afterAll(async () => {
    await module.close();
    await mongod.stop();
  });

  it('should be defined', async () => {
    expect(service).toBeDefined();
    expect(controller).toBeDefined();
  });
});
