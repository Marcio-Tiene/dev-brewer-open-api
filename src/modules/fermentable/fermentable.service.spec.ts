import { MongooseModule } from '@nestjs/mongoose';
import { Test, TestingModule } from '@nestjs/testing';
import {
  Fermentable,
  FermentableDocument,
  FermentableSchema,
} from './fermentable.schema';
import { FermentableService } from './fermentable.service';
import { MongoMemoryServer } from 'mongodb-memory-server';
import * as testCollections from '../../../test/test.collection';
const { fermentables: FermentablesSubjects } = testCollections;

describe('FermentableService', () => {
  let service: FermentableService;
  let mongod: MongoMemoryServer;
  let module: TestingModule;

  beforeAll(async () => {
    mongod = await MongoMemoryServer.create({
      instance: {
        dbName: 'service-test',
      },
    });
    module = await Test.createTestingModule({
      imports: [
        MongooseModule.forFeature([
          { name: Fermentable.name, schema: FermentableSchema },
        ]),
        MongooseModule.forRoot(mongod.getUri()),
      ],

      providers: [FermentableService],
    }).compile();

    service = module.get<FermentableService>(FermentableService);
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
  });

  it('should return one fermentable', async () => {
    const fermentable = FermentablesSubjects[0];

    const searchedFermentable = await service.findOne(
      fermentable._id.toHexString(),
    );

    expect(searchedFermentable).toMatchObject(fermentable);
  });

  it('should create a fermentable', async () => {
    const fermentableToCreate: Fermentable = {
      'add-after-boil': true,
      'coarse-fine-diff': 10,
      'diastatic-power': 1,
      'max-in-batch': 1,
      'recommend-mash': false,
      color: 3,
      moisture: 4,
      potential: 10000,
      protein: 1,
      type: 'Extract',
      yield: 3,
      name: 'test sem vergonha',
      notes: 'Eita nois nos nois',
    };
    const createdFermentable = (await service.create(
      fermentableToCreate,
    )) as FermentableDocument;

    const searchedFermentable = await service.findOne(createdFermentable._id);

    expect(searchedFermentable?.name).toBe(fermentableToCreate.name);

    expect(searchedFermentable?.toObject()).toMatchObject(
      createdFermentable.toObject(),
    );
  });
});
