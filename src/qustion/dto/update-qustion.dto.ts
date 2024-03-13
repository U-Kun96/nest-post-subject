import { PartialType } from '@nestjs/mapped-types';
import { CreateQustionDto } from './create-qustion.dto';

export class UpdateQustionDto extends PartialType(CreateQustionDto) {}
