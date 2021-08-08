import { Test, TestingModule } from '@nestjs/testing';
import { FermentableService } from './fermentable.service';

describe('FermentableService', () => {
  let service: FermentableService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FermentableService],
    }).compile();

    service = module.get<FermentableService>(FermentableService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
