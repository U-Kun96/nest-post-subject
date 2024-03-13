import { Test, TestingModule } from '@nestjs/testing';
import { QustionController } from './qustion.controller';
import { QustionService } from './qustion.service';

describe('QustionController', () => {
  let controller: QustionController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [QustionController],
      providers: [QustionService],
    }).compile();

    controller = module.get<QustionController>(QustionController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
