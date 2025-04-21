import { Type } from "class-transformer";
import { IsDate, IsOptional, IsString, Length } from "class-validator";

export class CreateCronogramaDto {
    @IsString({ message: 'La actividad debe ser una cadena de caracteres' })
    @Length(1, 50, { message: 'El actividad debe tener entre 1 y 50 caracteres' })
    actividad: string; 

    @IsOptional()
    @IsString({ message: 'La descripcion debe ser una cadena de caracteres' })
    descripcion?: string;

    @Type(() => Date)
    @IsDate({ message: 'La fecha debe ser un date' })
    fecha: Date;

    @IsString({ message: 'La hora debe ser una cadena de caracteres' })
    hora: string;

    @IsString({ message: 'El partidoId debe ser una cadena de caracteres' })
    partidoId: string;
}
