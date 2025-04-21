import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PropuestaService } from './propuesta.service';
import { CreatePropuestaDto } from './dto/create-propuesta.dto';
import { UpdatePropuestaDto } from './dto/update-propuesta.dto';

@Controller('propuesta')
export class PropuestaController {
  constructor(private propuestaService: PropuestaService) {}

  @Post()
  create(@Body() createPropuestaDto: CreatePropuestaDto) {
    return this.propuestaService.create(createPropuestaDto);
  }

  @Get()
  findAll() {
    return this.propuestaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.propuestaService.findOne(+id);
  }

  @Patch(':id')
  update(@Param() {id}, @Body() updatePropuestaDto: CreatePropuestaDto) {
    return this.propuestaService.update(id, updatePropuestaDto);
  }

  @Delete(':id')
  remove(@Param() {id}) {
    return this.propuestaService.remove(id);
  }
}
