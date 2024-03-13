import { Injectable } from '@nestjs/common';
import { CreateQustionDto } from './dto/create-qustion.dto';
import { UpdateQustionDto } from './dto/update-qustion.dto';

@Injectable()
export class QustionService {
  create(createQustionDto: CreateQustionDto) {
    return 'This action adds a new qustion';
  }

  findAll() {
    return `This action returns all qustion`;
  }

  findOne(id: number) {
    return `This action returns a #${id} qustion`;
  }

  update(id: number, updateQustionDto: UpdateQustionDto) {
    return `This action updates a #${id} qustion`;
  }

  remove(id: number) {
    return `This action removes a #${id} qustion`;
  }
}
