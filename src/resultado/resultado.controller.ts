import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { ResultadoService } from './resultado.service';
import { CreateResultadoDto } from './dto/create-resultado.dto';
import { UpdateResultadoDto } from './dto/update-resultado.dto';
import { AuthGuard } from 'src/guard/auth.guard';
import { RolesGuard } from 'src/guard/roles.guard';
import { Roles } from 'src/decoradores/roles.decorator';

@Controller('resultado')
export class ResultadoController {
  constructor(private readonly resultadoService: ResultadoService) {}

  @Post()
  create(@Body() createResultadoDto: CreateResultadoDto) {
    return this.resultadoService.create(createResultadoDto);
  }

  @UseGuards(AuthGuard,RolesGuard)
  @Roles('votante')
  @Get()
  findAll() {
    return this.resultadoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.resultadoService.findOne(+id);
  }

  @Patch(':id')
  update(@Param() {id},@Body() createResultadoDto: CreateResultadoDto) {
    return this.resultadoService.update(id,createResultadoDto);
  }

  @Patch('v/:id')
  updateV(@Param() {id}) {
    return this.resultadoService.updateV(id);
  }

  @Delete(':id')
  remove(@Param() {id}) {
    return this.resultadoService.remove(id);
  }
}
