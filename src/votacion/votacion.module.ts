import { Module } from '@nestjs/common';
import { VotacionService } from './votacion.service';
import { VotacionController } from './votacion.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { VotacionEntity } from './entities/votacion.entity';
import { PartidoModule } from 'src/partido/partido.module';
import { PersonaEntity } from 'src/persona/entities/persona.entity';

@Module({
  imports: [TypeOrmModule.forFeature([VotacionEntity,PersonaEntity]),
  PartidoModule,PersonaEntity],
  controllers: [VotacionController],
  providers: [VotacionService],
})
export class VotacionModule {}
