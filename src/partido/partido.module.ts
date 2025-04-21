import { Module } from '@nestjs/common';
import { PartidoService } from './partido.service';
import { PartidoController } from './partido.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PartidoEntity } from './entities/partido.entity';

@Module({
  imports: [TypeOrmModule.forFeature([PartidoEntity])],
  controllers: [PartidoController],
  providers: [PartidoService],
  exports: [TypeOrmModule],
})
export class PartidoModule {}
