import { Module } from '@nestjs/common';
import { CronogramaService } from './cronograma.service';
import { CronogramaController } from './cronograma.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CronogramaEntity } from './entities/cronograma.entity';
import { PartidoModule } from 'src/partido/partido.module';

@Module({
  imports: [TypeOrmModule.forFeature([CronogramaEntity]), PartidoModule],
  controllers: [CronogramaController],
  providers: [CronogramaService],
})
export class CronogramaModule {}
