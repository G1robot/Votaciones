import { Injectable } from '@nestjs/common';
import { CreateGaleriaDto } from './dto/create-galeria.dto';
import { UpdateGaleriaDto } from './dto/update-galeria.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { GaleriaEntity } from './entities/galeria.entity';
import { Repository } from 'typeorm';
import { PartidoEntity } from 'src/partido/entities/partido.entity';
import { MongoRepository } from 'typeorm';
import { ObjectId } from 'mongodb';
@Injectable()
export class GaleriaService {
  constructor(
    @InjectRepository(GaleriaEntity)
    private galeriaRepository: MongoRepository<GaleriaEntity>,

    @InjectRepository(PartidoEntity)
    private partidoRepository: MongoRepository<PartidoEntity>,
  ) {}

  public async create(gal) {
    const partido = await this.findById(gal.partidoId);
    if (!partido) {
      throw new Error('Invalid partidoId: Partido not found');
    }
    return await this.galeriaRepository.save(gal);
  }

  public async findById(id: string): Promise<PartidoEntity | null> {
    return await this.partidoRepository.findOne({
      where: { _id: new ObjectId(id) },
    });
  }

  async findAll() {
   const galerias = await this.galeriaRepository.find();
    return await Promise.all(
      galerias.map(async (galeria) => {
        const partido = await this.findById(galeria.partidoId);
        return {
          ...galeria,
          partidoId: partido ? partido.nombre : null,
        };
      }),
    );
  }

  public async find(partidoId: string) {
    return await this.galeriaRepository.find({ where: { partidoId: partidoId } });
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
