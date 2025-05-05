import { Injectable } from '@nestjs/common';
import { CreateCronogramaDto } from './dto/create-cronograma.dto';
import { UpdateCronogramaDto } from './dto/update-cronograma.dto';
import { In, MongoRepository, Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CronogramaEntity } from './entities/cronograma.entity';
import { PartidoEntity } from 'src/partido/entities/partido.entity';
import { ObjectId } from 'mongodb';

@Injectable()
export class CronogramaService {
  constructor(
    @InjectRepository(CronogramaEntity)
    private cronogramaRepository: Repository<CronogramaEntity>,
    @InjectRepository(PartidoEntity)
    private partidoRepository: MongoRepository<PartidoEntity>,
  ) {}
  public async create(cro) {
    const partido = await this.findById(cro.partidoId);
    if (!partido) {
      throw new Error('Invalid partidoId: Partido not found');
    }
    return await this.cronogramaRepository.save(cro);
  }

  public async findById(id: string): Promise<PartidoEntity | null> {
    return await this.partidoRepository.findOne({
      where: { _id: new ObjectId(id) },
    });
  }

  async findAll() {
    const cronogramas = await this.cronogramaRepository.find();
    return await Promise.all(
      cronogramas.map(async (cronograma) => {
        const partido = await this.findById(cronograma.partidoId);
        return {
          ...cronograma,
          partidoId: partido ? partido.nombre : null,
        };
      }),
    );
  }

  public async find(partidoId: string) {
    return await this.cronogramaRepository.find({ where: { partidoId: partidoId } });
  }

  findOne(id: number) {
    return `This action returns a #${id} cronograma`;
  }

  public async update(id, cro) {
    const partido = await this.findById(cro.partidoId);
    if (!partido) {
      throw new Error('Invalid partidoId: Partido not found');
    }
    return await this.cronogramaRepository.update(id, cro);
  }

  public async remove(id) {
    return await this.cronogramaRepository.delete(id);
  }
}
