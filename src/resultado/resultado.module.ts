import { Module } from '@nestjs/common';
import { ResultadoService } from './resultado.service';
import { ResultadoController } from './resultado.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ResultadoEntity } from './entities/resultado.entity';
import { VotacionEntity } from 'src/votacion/entities/votacion.entity';
import { PartidoModule } from 'src/partido/partido.module';
import { Socket } from 'src/shared/socket';

@Module({
  imports: [TypeOrmModule.forFeature([ResultadoEntity]),PartidoModule],
  controllers: [ResultadoController],
  providers: [ResultadoService,Socket],
  exports: [ResultadoService, TypeOrmModule],
})
export class ResultadoModule {}
