import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { PersonaService } from 'src/persona/persona.service';

@Injectable()
export class AuthService {
    constructor(private personaService:PersonaService,
        private jwtService:JwtService
    ){}
    async signIn(ci:string){
        const user = await this.personaService.find(ci);
        if(user )
        {
            
            const isMatch = await this.personaService.find(ci);
            if(isMatch){
                const  { ci,...result }= user;
                const token= await this.jwtService.signAsync(result);
                return token;
            }
        }else{
            throw new UnauthorizedException('Error de acceso');
        }
    }
}
