import { Module } from '@nestjs/common';
import { QustionService } from './qustion.service';
import { QustionController } from './qustion.controller';

@Module({
  controllers: [QustionController],
  providers: [QustionService],
})
export class QustionModule {}
