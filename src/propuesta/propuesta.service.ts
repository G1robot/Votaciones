import { Injectable } from '@nestjs/common';
import { CreatePropuestaDto } from './dto/create-propuesta.dto';
import { UpdatePropuestaDto } from './dto/update-propuesta.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { PropuestaEntity } from './entities/propuesta.entity';
import { Repository } from 'typeorm';
import { PartidoEntity } from 'src/partido/entities/partido.entity';
import { MongoRepository } from 'typeorm';
import { ObjectId } from 'mongodb';

@Injectable()
export class PropuestaService {
  constructor(
    @InjectRepository(PropuestaEntity)
    private readonly  propuestaRepository: MongoRepository<PropuestaEntity>,

    @InjectRepository(PartidoEntity)
    private readonly partidoRepository: MongoRepository<PartidoEntity>,
  ) {}
  public async create(pro) {
    const partido = await this.findById(pro.partidoId);
    if (!partido) {
      throw new Error('Invalid partidoId: Partido not found');
    }
    return await this.propuestaRepository.save(pro);
  }

  public async findById(id: string): Promise<PartidoEntity | null> {
    return await this.partidoRepository.findOne({
      where: { _id: new ObjectId(id) },
    });
  }

  findAll(): Promise<PropuestaEntity[]> {
    return this.propuestaRepository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} propuesta`;
  }

  public async update(id,pro) {
    return await this.propuestaRepository.update(id, pro);
  }

  public async remove(id) {
    return await this.propuestaRepository.delete(id);
  }
}
