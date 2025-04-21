import { Injectable } from '@nestjs/common';
import { CreateGaleriaDto } from './dto/create-galeria.dto';
import { UpdateGaleriaDto } from './dto/update-galeria.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { GaleriaEntity } from './entities/galeria.entity';
import { Repository } from 'typeorm';

@Injectable()
export class GaleriaService {
  constructor(
    @InjectRepository(GaleriaEntity)
    private galeriaRepository: Repository<GaleriaEntity>
  ) {}

  public async create(gal) {
    return await this.galeriaRepository.save(gal);
  }

  findAll(): Promise<GaleriaEntity[]> {
    return this.galeriaRepository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} galeria`;
  }

  public async update(id, gal) {
    return await this.galeriaRepository.update(id, gal);
  }

  public async remove(id) {
    return await this.galeriaRepository.delete(id);
  }
}
