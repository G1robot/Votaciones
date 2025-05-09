import { Injectable } from '@nestjs/common';
import { CreateResultadoDto } from './dto/create-resultado.dto';
import { UpdateResultadoDto } from './dto/update-resultado.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { ResultadoEntity } from './entities/resultado.entity';
import { MongoRepository, Repository } from 'typeorm';
import { PartidoEntity } from 'src/partido/entities/partido.entity';
import { ObjectId } from 'mongodb';
import { ResultadoGateway } from './resultado.gateway';
import { Socket } from 'src/shared/socket';

@Injectable()
export class ResultadoService {
  constructor(
    @InjectRepository(ResultadoEntity)
    private readonly resultadoRepository: MongoRepository <ResultadoEntity>,

    @InjectRepository(PartidoEntity)
    private readonly partidoRepository: MongoRepository<PartidoEntity>,
    private socket: Socket
  ) {}
  public async create(resultado) {
    const partido = await this.findPartido(resultado.partidoId);
    if (!partido) {
      throw new Error('Invalid partidoId: Partido not found');
    }

    const resultadoGuardado = await this.resultadoRepository.save(resultado);
    this.socket.updateProduct();

    return resultadoGuardado;
  }
  public async findPartido(id: string): Promise<PartidoEntity | null> {
    return await this.partidoRepository.findOne({
      where: { _id: new ObjectId(id) },
    });
  }

  async findAll() {
    const resultados = await this.resultadoRepository.find();
    return await Promise.all(
      resultados.map(async (resultado) => {
        const partido = await this.findPartido(resultado.partidoId);
        return {
          ...resultado,
          partidoId: partido ? partido.nombre : null,
        };
      }),
    );
  }

  findOne(id: number) {
    return `This action returns a #${id} resultado`;
  }

  public async update(id, resultado) {
    return await this.resultadoRepository.update(id, resultado);
  }

  public async updateV(id: string) {
    const resultado = await this.resultadoRepository.findOne({ where: { _id: new ObjectId(id) } });
    let suma = 0;
    if (resultado) {
      suma = resultado.votos + 1;
    }
    
    const up = await this.resultadoRepository.update(new ObjectId(id), { votos: suma });
    this.socket.updateProduct();
    return up;
  }
  

  public async remove(id) {
    return await this.resultadoRepository.delete(id);
  }
}
