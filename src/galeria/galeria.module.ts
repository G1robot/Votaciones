import { Module } from '@nestjs/common';
import { GaleriaService } from './galeria.service';
import { GaleriaController } from './galeria.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GaleriaEntity } from './entities/galeria.entity';

@Module({
  imports: [TypeOrmModule.forFeature([GaleriaEntity])],
  controllers: [GaleriaController],
  providers: [GaleriaService],
})
export class GaleriaModule {}
