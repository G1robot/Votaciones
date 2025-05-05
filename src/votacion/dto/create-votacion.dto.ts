import { IsString } from "class-validator";

export class CreateVotacionDto {
    @IsString({ message: 'El partidoId debe ser una cadena de caracteres' })
    partidoId: string; 
}
