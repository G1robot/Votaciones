import { IsNumber, IsString } from "class-validator";

export class CreateResultadoDto {
    @IsString({ message: 'El partidoId debe ser una cadena de caracteres' })
    partidoId: string; 

    @IsNumber({}, { message: 'Los votos deben ser un número' })
    votos: number;
}
