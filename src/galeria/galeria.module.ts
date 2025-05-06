import { Module } from '@nestjs/common';
import { GaleriaService } from './galeria.service';
import { GaleriaController } from './galeria.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GaleriaEntity } from './entities/galeria.entity';
import { PartidoModule } from 'src/partido/partido.module';

@Module({
  imports: [TypeOrmModule.forFeature([GaleriaEntity]),PartidoModule],
  controllers: [GaleriaController],
  providers: [GaleriaService],
})
export class GaleriaModule {}
