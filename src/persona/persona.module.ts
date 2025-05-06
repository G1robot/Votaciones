import { Module } from '@nestjs/common';
import { PersonaService } from './persona.service';
import { PersonaController } from './persona.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PersonaEntity } from './entities/persona.entity';
import { Socket } from 'src/shared/socket';

@Module({
  imports: [TypeOrmModule.forFeature([PersonaEntity])],
  controllers: [PersonaController],
  providers: [PersonaService,Socket],
  exports: [PersonaService,TypeOrmModule],
})
export class PersonaModule {}
