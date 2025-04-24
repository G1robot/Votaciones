import { Module } from '@nestjs/common';
import { PartidoService } from './partido.service';
import { PartidoController } from './partido.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PartidoEntity } from './entities/partido.entity';
import { ResultadoModule } from 'src/resultado/resultado.module';
import { ResultadoEntity } from 'src/resultado/entities/resultado.entity';

@Module({
  imports: [TypeOrmModule.forFeature([PartidoEntity,ResultadoEntity])],
  controllers: [PartidoController],
  providers: [PartidoService],
  exports: [TypeOrmModule],
})
export class PartidoModule {}
