import { MongooseModule } from '@nestjs/mongoose';
import { Test, TestingModule } from '@nestjs/testing';
import { Style, StyleDocument, StyleSchema } from './style.schema';
import { StyleService } from './style.service';
import { MongoMemoryServer } from 'mongodb-memory-server';
import * as testCollections from '../../../test/test.collection';
// const { styles: StylesSubjects } = testCollections;

describe('StyleService', () => {
  let service: StyleService;
  let mongod: MongoMemoryServer;
  let module: TestingModule;

  // beforeAll(async () => {
  //   mongod = await MongoMemoryServer.create({
  //     instance: {
  //       dbName: 'style-service-test',
  //     },
  //   });
  //   module = await Test.createTestingModule({
  //     imports: [
  //       MongooseModule.forFeature([{ name: Style.name, schema: StyleSchema }]),
  //       MongooseModule.forRoot(mongod.getUri()),
  //     ],

  //     providers: [StyleService],
  //   }).compile();

  //   service = module.get<StyleService>(StyleService);
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
  // });

  // it('should return one style', async () => {
  //   const style = StylesSubjects[0];

  //   const searchedStyle = await service.findOne(style._id.toHexString());

  //   expect(searchedStyle).toMatchObject(style);
  // });

  // it('should create a style', async () => {
  //   const styleToCreate: Style = {
  //     'add-after-boil': true,
  //     'coarse-fine-diff': 10,
  //     'diastatic-power': 1,
  //     'max-in-batch': 1,
  //     'recommend-mash': false,
  //     color: 3,
  //     moisture: 4,
  //     potential: 10000,
  //     protein: 1,
  //     type: 'Extract',
  //     yield: 3,
  //     name: 'test sem vergonha',
  //     notes: 'Eita nois nos nois',
  //   };
  //   const createdStyle = (await service.create(styleToCreate)) as StyleDocument;

  //   const searchedStyle = await service.findOne(createdStyle._id);

  //   expect(searchedStyle?.name).toBe(styleToCreate.name);

  //   expect(searchedStyle?.toObject()).toMatchObject(createdStyle.toObject());
  // });
});
