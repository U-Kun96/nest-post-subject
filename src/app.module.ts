import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { QustionModule } from './qustion/qustion.module';
import { AnswerModule } from './answer/answer.module';

@Module({
  imports: [UserModule, QustionModule, AnswerModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
