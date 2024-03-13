import {
  IsDate,
  IsEmail,
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsString,
} from '@nestjs/class-validator';
import { UserRole } from '../types/userRole.type';

export class SignUpUserDto {
  @IsString()
  @IsNotEmpty({ message: '이름을 입력해주세요!' })
  readonly name: string;

  @IsNumber()
  @IsNotEmpty({ message: '나이를 입력해주세요!' })
  readonly age: number;

  @IsString()
  @IsNotEmpty({ message: '성별을 입력해주세요!' })
  readonly gender: string;

  @IsEmail()
  @IsNotEmpty({ message: '이메일을 입력해주세요!' })
  email: string;

  @IsNumber()
  @IsNotEmpty({ message: '비밀번호를 입력해주세요!' })
  password: number;

  @IsString()
  @IsNotEmpty({ message: '휴대폰 번호를 입력해주세요!' })
  phoneNumber: string;

  @IsDate()
  createdAt: Date;

  @IsDate()
  updatedAt: Date;

  @IsDate()
  deletedAt: Date;

  @IsEnum(UserRole)
  @IsNotEmpty({ message: '권한을 선택해주세요!' })
  readonly roles: UserRole;
}
