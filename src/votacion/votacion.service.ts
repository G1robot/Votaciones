import { Injectable } from '@nestjs/common';
import { CreateVotacionDto } from './dto/create-votacion.dto';
import { UpdateVotacionDto } from './dto/update-votacion.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { VotacionEntity } from './entities/votacion.entity';
import { PartidoEntity } from 'src/partido/entities/partido.entity';
import { MongoRepository, Repository } from 'typeorm';
import { PersonaEntity } from 'src/persona/entities/persona.entity';
import { ObjectId } from 'mongodb';
import { ResultadoEntity } from 'src/resultado/entities/resultado.entity';

@Injectable()
export class VotacionService {
  constructor(
    @InjectRepository(VotacionEntity)
    private readonly votacionRepository: Repository<VotacionEntity>,

    @InjectRepository(PartidoEntity)
    private readonly partidoRepository: MongoRepository<PartidoEntity>,
    
    @InjectRepository(PersonaEntity)
    private readonly personaRepository: MongoRepository<PersonaEntity>,

    @InjectRepository(ResultadoEntity)
    private readonly resultadoRepository: MongoRepository <ResultadoEntity>,
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

    if (persona.voto) {
      throw new Error('This person has already voted');
    }

    const savedVoto = await this.votacionRepository.save(voto);
    const d = { voto: true }; 

    await this.personaRepository.update(voto.personaId,d);

    const idpartido = voto.partidoId;
    console.log(idpartido);
    await this.updateV(idpartido);
    
    return savedVoto;
  }

  public async findPartido(id: string): Promise<PartidoEntity | null> {
    return await this.partidoRepository.findOne({
      where: { _id: new ObjectId(id) },
    });
  }
  public async updateV(partidoId: string) {
    console.log(partidoId);
    const resultado = await this.resultadoRepository.findOne({
      where: { partidoId: new ObjectId(partidoId) },
    });
    console.log(resultado?.id);
    const idresultado = resultado?.id;
    let suma = 0;
    if (resultado) {
      suma = resultado.votos + 1;
    }
    
    await this.resultadoRepository.update(new ObjectId(idresultado), { votos: suma });
  }

  public async findPersona(id: string): Promise<PersonaEntity | null> {
    return await this.personaRepository.findOne({
      where: { _id: new ObjectId(id) },
    });
  }

  async findAll(): Promise<any> {
    const votaciones = await this.votacionRepository.find();
    const groupedByPartido = {};

    for (const votacion of votaciones) {
      const partido = await this.findPartido(votacion.partidoId);
      const partidoNombre = partido ? partido.nombre : 'Unknown Partido';

      const persona = await this.findPersona(votacion.personaId);
      const personaNombre = persona ? persona.nombreCompleto : 'Unknown Persona';

      votacion.partidoId = partidoNombre;
      votacion.personaId = personaNombre;

      if (!groupedByPartido[partidoNombre]) {
        groupedByPartido[partidoNombre] = [];
      }
      groupedByPartido[partidoNombre].push(votacion);
    }

    return groupedByPartido;
  }



  public async remove(id) {
    return await this.votacionRepository.delete(id);
  }
}
