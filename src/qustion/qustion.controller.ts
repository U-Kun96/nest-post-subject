import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { QustionService } from './qustion.service';
import { CreateQustionDto } from './dto/create-qustion.dto';
import { UpdateQustionDto } from './dto/update-qustion.dto';

@Controller('qustion')
export class QustionController {
  constructor(private readonly qustionService: QustionService) {}

  @Post()
  create(@Body() createQustionDto: CreateQustionDto) {
    return this.qustionService.create(createQustionDto);
  }

  @Get()
  findAll() {
    return this.qustionService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.qustionService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateQustionDto: UpdateQustionDto) {
    return this.qustionService.update(+id, updateQustionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.qustionService.remove(+id);
  }
}
