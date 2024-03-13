// 질문 작성
import { IsDate, IsNotEmpty, IsString } from '@nestjs/class-validator';

export class CreateQustionDto {
  @IsString()
  @IsNotEmpty({ message: '제목을 입력해주세요!' })
  title: string;

  @IsString() // 엔티티에 text 타입으로 지정했는데 써도 되나 모르겠음;; 엔티티는 DBMS에 알려주는거니까 상관없겠지~
  @IsNotEmpty({ message: '내용을 입력해주세요!' })
  content: string;

  @IsDate()
  createdAt: Date;

  @IsDate()
  updatedAt: Date;

  @IsDate()
  deletedAt: Date;
}
