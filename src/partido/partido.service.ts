import { Injectable } from '@nestjs/common';
import { CreatePartidoDto } from './dto/create-partido.dto';
import { UpdatePartidoDto } from './dto/update-partido.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { PartidoEntity } from './entities/partido.entity';
import { Repository } from 'typeorm';
import { MongoRepository } from 'typeorm';
import { ObjectId } from 'mongodb';
import { NotFoundException } from '@nestjs/common';

@Injectable()
export class PartidoService {
  constructor(
    @InjectRepository(PartidoEntity)
    private partidoRepository: MongoRepository <PartidoEntity>
  ) {}

  public async create(par) {
    return await this.partidoRepository.save(par);
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
