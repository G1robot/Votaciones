import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CronogramaService } from './cronograma.service';
import { CreateCronogramaDto } from './dto/create-cronograma.dto';
import { UpdateCronogramaDto } from './dto/update-cronograma.dto';

@Controller('cronograma')
export class CronogramaController {
  constructor(private cronogramaService: CronogramaService) {}

  @Post()
  create(@Body() createCronogramaDto: CreateCronogramaDto) {
    return this.cronogramaService.create(createCronogramaDto);
  }

  @Get()
  findAll() {
    return this.cronogramaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.cronogramaService.findOne(+id);
  }

  @Patch(':id')
  update(@Param() {id}, @Body() updateCronogramaDto: CreateCronogramaDto) {
    return this.cronogramaService.update(id, updateCronogramaDto);
  }

  @Delete(':id')
  remove(@Param() {id}) {
    return this.cronogramaService.remove(id);
  }
}
