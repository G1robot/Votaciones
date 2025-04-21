import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { PersonaModule } from 'src/persona/persona.module';
import { JwtModule } from '@nestjs/jwt';


@Module({
  controllers: [AuthController],
  providers: [AuthService],
  imports: [PersonaModule,
    JwtModule.register({
      global: true,
      secret: 'jabbaTheHutt',
      signOptions: { expiresIn: '60s' },
    }),
  ],
})
export class AuthModule {}
