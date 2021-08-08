import { Test, TestingModule } from '@nestjs/testing';
import { FermentableController } from './fermentable.controller';
import { FermentableService } from './fermentable.service';

describe('FermentableController', () => {
  let controller: FermentableController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FermentableController],
      providers: [FermentableService],
    }).compile();

    controller = module.get<FermentableController>(FermentableController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
