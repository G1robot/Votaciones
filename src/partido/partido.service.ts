import { Injectable } from '@nestjs/common';
import { CreatePartidoDto } from './dto/create-partido.dto';
import { UpdatePartidoDto } from './dto/update-partido.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { PartidoEntity } from './entities/partido.entity';
import { Repository } from 'typeorm';
import { MongoRepository } from 'typeorm';
import { ObjectId } from 'mongodb';
import { NotFoundException } from '@nestjs/common';
import { ResultadoEntity } from 'src/resultado/entities/resultado.entity';

@Injectable()
export class PartidoService {
  constructor(
    @InjectRepository(PartidoEntity)
    private partidoRepository: MongoRepository <PartidoEntity>,

    @InjectRepository(ResultadoEntity)
    private resultadoRepository: MongoRepository<ResultadoEntity>,
  ) {}

  public async create(par) {
    const partido = await this.partidoRepository.save(par);

    const resultado = {
      partidoId: partido.id,
      votos: 0,
    };

    await this.resultadoRepository.save(resultado);

    return partido;
  }

  findAll(): Promise<PartidoEntity[]> {
    return this.partidoRepository.find();
  }

  public async findById(id: string): Promise<PartidoEntity | null> {
    return await this.partidoRepository.findOne({
      where: { _id: new ObjectId(id) },
    });
  }
  

  public async update(id, par) {
    return await this.partidoRepository.update(id, par);
  }

  public async remove(id) {
    return await this.partidoRepository.delete(id);
  }
}
