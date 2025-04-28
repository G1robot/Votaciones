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
    private personaRepository: Repository <PersonaEntity>
  ) {}
  public async create(per) {
    return await this.personaRepository.save(per);
  }

  findAll(): Promise<PersonaEntity[]> {
    return this.personaRepository.find();
  }

  public async find(ci:string) {
    return await this.personaRepository.findOne({where:{ci:ci}});
  }

  public async update(id, per) {
    return await this.personaRepository.update(id, per);
  }

  public async remove(id) {
    return await this.personaRepository.delete(id);
  }
}
