import { Test, TestingModule } from '@nestjs/testing';
import { GrainService } from './grain.service';

describe('GrainService', () => {
  let service: GrainService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GrainService],
    }).compile();

    service = module.get<GrainService>(GrainService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
