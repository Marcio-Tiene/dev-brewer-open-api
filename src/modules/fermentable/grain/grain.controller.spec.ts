import { Test, TestingModule } from '@nestjs/testing';
import { GrainController } from './grain.controller';
import { GrainService } from './grain.service';

describe('GrainController', () => {
  let controller: GrainController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GrainController],
      providers: [GrainService],
    }).compile();

    controller = module.get<GrainController>(GrainController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
