import { IsOptional, IsString, Length } from "class-validator";

export class CreatePropuestaDto {
    @IsString({ message: 'El nombre debe ser una cadena de caracteres' })
    @Length(1, 50, { message: 'El nombre debe tener entre 1 y 50 caracteres' })
    nombre: string; 

    @IsString({ message: 'La descripcion debe ser una cadena de caracteres' })
    @Length(1, 500, { message: 'La descripcion debe tener entre 1 y 500 caracteres' })
    descripcion: string; 

    @IsString({ message: 'El partidoId debe ser una cadena de caracteres' })
    partidoId: string;
}
