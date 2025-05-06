import { Injectable } from '@nestjs/common';
import { CreatePersonaDto } from './dto/create-persona.dto';
import { UpdatePersonaDto } from './dto/update-persona.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { PersonaEntity } from './entities/persona.entity';
import { Repository } from 'typeorm';
import { Socket } from 'src/shared/socket';

@Injectable()
export class PersonaService {
  constructor(
    @InjectRepository(PersonaEntity)
    private personaRepository: Repository <PersonaEntity>,
    private socket: Socket
  ) {}
  public async create(per) {
    const nuevo = await this.personaRepository.save(per);
    this.socket.updateProduct();
    return nuevo;
  }

  findAll(): Promise<PersonaEntity[]> {
    return this.personaRepository.find();
  }

  public async find(ci:string) {
    return await this.personaRepository.findOne({where:{ci:ci}});
  }

  public async update(id, per) {
    const edit = await this.personaRepository.update(id, per);
    this.socket.updateProduct();
    return edit;
  }

  public async remove(id) {
    const del = await this.personaRepository.delete(id);
    this.socket.updateProduct();
    return del;
  }
}
