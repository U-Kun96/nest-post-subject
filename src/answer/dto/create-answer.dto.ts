import { IsNotEmpty, IsString } from '@nestjs/class-validator';

export class CreateAnswerDto {
  @IsString()
  @IsNotEmpty({ message: '내용을 입력해주세요' })
  content: string;
}
