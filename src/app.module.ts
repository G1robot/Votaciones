import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PartidoModule } from './partido/partido.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { ResponseInterceptor } from './response/response.interceptor';
import { PropuestaModule } from './propuesta/propuesta.module';
import { PersonaModule } from './persona/persona.module';
import { GaleriaModule } from './galeria/galeria.module';
import { CronogramaModule } from './cronograma/cronograma.module';
import { VotacionModule } from './votacion/votacion.module';
import { AuthModule } from './auth/auth.module';
import { ResultadoModule } from './resultado/resultado.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mongodb',
      url: 'mongodb://127.0.0.1:27017/votaciones',
      port: 27017,
      logging: true,
      autoLoadEntities: true,
      synchronize: true,
    }),
    PartidoModule,
    PropuestaModule,
    PersonaModule,
    GaleriaModule,
    CronogramaModule,
    VotacionModule,
    AuthModule,
    ResultadoModule
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {provide: APP_INTERCEPTOR, useClass: ResponseInterceptor},
  ],
})
export class AppModule {}
