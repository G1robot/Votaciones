import { Injectable } from '@nestjs/common';
import { CreatePersonaDto } from './dto/create-persona.dto';
import { UpdatePersonaDto } from './dto/update-persona.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { PersonaEntity } from './entities/persona.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PersonaService {
  constructor(
    @InjectRepository(PersonaEntity)
    private clienteRepository: Repository <PersonaEntity>
  ) {}
  public async create(per) {
    return await this.clienteRepository.save(per);
  }

  findAll(): Promise<PersonaEntity[]> {
    return this.clienteRepository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} persona`;
  }

  public async update(id, per) {
    return await this.clienteRepository.update(id, per);
  }

  public async remove(id) {
    return await this.clienteRepository.delete(id);
  }
}
