import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { PersonaService } from 'src/persona/persona.service';
import { SignInDto } from './dto/signIn.dto';
import { CreatePersonaDto } from 'src/persona/dto/create-persona.dto';

@Controller('auth')
export class AuthController {
    constructor(
        private readonly authService:AuthService,
        private readonly personaService:PersonaService,
    ){}
    @Post('login')
    singIn(@Body() {ci}:SignInDto ){
        return this.authService.signIn(ci);
    }

    @Post('create')
    create(@Body() user:CreatePersonaDto){
        return this.personaService.create(user);
    }
}
