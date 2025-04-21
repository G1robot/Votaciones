import { IsOptional, IsString, Length } from "class-validator";

export class CreatePartidoDto {
    @IsString({ message: 'El nombre debe ser una cadena de caracteres' })
    @Length(1, 50, { message: 'El nombre debe tener entre 1 y 50 caracteres' })
    nombre: string; 

    @IsString({ message: 'Las siglas deben ser una cadena de caracteres' })
    @Length(1, 10, { message: 'Las siglas deben tener entre 1 y 10 caracteres' })
    siglas: string; 

    @IsString({ message: 'El nombre del candidato debe ser una cadena de caracteres' })
    @Length(1, 50, { message: 'El nombre del candidato debe tener entre 1 y 50 caracteres' })
    nombreCandidato: string; 

    @IsOptional()
    @IsString({ message: 'El logo debe ser una cadena de caracteres' })
    logo?: string; 

    @IsOptional()
    @IsString({ message: 'La foto del candidato debe ser una cadena de caracteres' })
    fotoCandidato?: string; 

    @IsString({ message: 'La descripcion debe ser una cadena de caracteres' })
    descripcion: string;
}
