import { Module } from '@nestjs/common';
import { VotacionService } from './votacion.service';
import { VotacionController } from './votacion.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { VotacionEntity } from './entities/votacion.entity';
import { PartidoModule } from 'src/partido/partido.module';
import { PersonaEntity } from 'src/persona/entities/persona.entity';
import { ResultadoEntity } from 'src/resultado/entities/resultado.entity';
import { ResultadoModule } from 'src/resultado/resultado.module';

@Module({
  imports: [TypeOrmModule.forFeature([VotacionEntity,PersonaEntity]),
  PartidoModule,PersonaEntity,ResultadoEntity,ResultadoModule],
  controllers: [VotacionController],
  providers: [VotacionService],
  exports: [VotacionService, TypeOrmModule],
})
export class VotacionModule {}
