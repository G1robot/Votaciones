import { Injectable } from '@nestjs/common';
import { CreateVotacionDto } from './dto/create-votacion.dto';
import { UpdateVotacionDto } from './dto/update-votacion.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { VotacionEntity } from './entities/votacion.entity';
import { PartidoEntity } from 'src/partido/entities/partido.entity';
import { MongoRepository, Repository } from 'typeorm';
import { PersonaEntity } from 'src/persona/entities/persona.entity';
import { ObjectId } from 'mongodb';

@Injectable()
export class VotacionService {
  constructor(
    @InjectRepository(VotacionEntity)
    private readonly votacionRepository: Repository<VotacionEntity>,

    @InjectRepository(PartidoEntity)
    private readonly partidoRepository: MongoRepository<PartidoEntity>,
    
    @InjectRepository(PersonaEntity)
    private readonly personaRepository: MongoRepository<PersonaEntity>,
  ) {}
  public async create(voto) {
    const partido = await this.findPartido(voto.partidoId);
    if (!partido) {
      throw new Error('Invalid partidoId: Partido not found');
    }
    const persona = await this.findPersona(voto.personaId);
    if (!persona) {
      throw new Error('Invalid personaId: Persona not found');
    }
    return await this.votacionRepository.save(voto);
  }

  public async findPartido(id: string): Promise<PartidoEntity | null> {
    return await this.partidoRepository.findOne({
      where: { _id: new ObjectId(id) },
    });
  }

  public async findPersona(id: string): Promise<PersonaEntity | null> {
    return await this.personaRepository.findOne({
      where: { _id: new ObjectId(id) },
    });
  }

  findAll() {
    return `This action returns all votacion`;
  }

  findOne(id: number) {
    return `This action returns a #${id} votacion`;
  }

  public async update(id: number, updateVotacionDto: UpdateVotacionDto) {
    return `This action updates a #${id} votacion`;
  }

  public async remove(id: number) {
    return `This action removes a #${id} votacion`;
  }
}
