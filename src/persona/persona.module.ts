import { Module } from '@nestjs/common';
import { PersonaService } from './persona.service';
import { PersonaController } from './persona.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PersonaEntity } from './entities/persona.entity';

@Module({
  imports: [TypeOrmModule.forFeature([PersonaEntity])],
  controllers: [PersonaController],
  providers: [PersonaService],
  exports: [PersonaService,TypeOrmModule],
})
export class PersonaModule {}
