import { Module } from '@nestjs/common';
import { PropuestaService } from './propuesta.service';
import { PropuestaController } from './propuesta.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PropuestaEntity } from './entities/propuesta.entity';
import { PartidoModule } from 'src/partido/partido.module';

@Module({
  imports: [TypeOrmModule.forFeature([PropuestaEntity]),
  PartidoModule,],
  controllers: [PropuestaController],
  providers: [PropuestaService],
})
export class PropuestaModule {}
