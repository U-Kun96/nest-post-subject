import { Test, TestingModule } from '@nestjs/testing';
import { QustionService } from './qustion.service';

describe('QustionService', () => {
  let service: QustionService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [QustionService],
    }).compile();

    service = module.get<QustionService>(QustionService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
