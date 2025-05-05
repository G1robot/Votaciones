import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Req } from '@nestjs/common';
import { VotacionService } from './votacion.service';
import { CreateVotacionDto } from './dto/create-votacion.dto';
import { UpdateVotacionDto } from './dto/update-votacion.dto';
import { AuthGuard } from 'src/guard/auth.guard';
import { Request } from 'express';

@Controller('votacion')
@UseGuards(AuthGuard)
export class VotacionController {
  constructor(private readonly votacionService: VotacionService) {}

  @Post()
  create(@Body() createVotacionDto: CreateVotacionDto, @Req() request) {
    const userId = request.user.id;
    return this.votacionService.create({ ...createVotacionDto, personaId: userId });
  }

  @Get()
  findAll() {
    return this.votacionService.findAll();
  }


  @Delete(':id')
  remove(@Param() {id}) {
    return this.votacionService.remove(id);
  }
}
