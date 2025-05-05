import { Type } from "class-transformer";
import { IsBoolean, IsDate, IsEmail, IsOptional, IsString, Length } from "class-validator";

export class CreatePersonaDto {
    @IsString({ message: 'El nombre debe ser una cadena de caracteres' })
    @Length(1, 50, { message: 'El nombre debe tener entre 1 y 50 caracteres' })
    nombreCompleto: string; 

    @IsString({ message: 'El ci debe ser una cadena de caracteres' })
    @Length(1, 10, { message: 'El ci debe tener entre 1 y 10 caracteres' })
    ci: string;
    @Type(() => Date)
    @IsDate({ message: 'La fecha de nacimiento debe ser un date' })
    fechaNacimiento: Date;


    @IsString({ message: 'El rol debe ser una cadena de caracteres' })
    @Length(1, 20, { message: 'El rol debe tener entre 1 y 20 caracteres' })
    rol: string;

    @IsOptional()
    @IsBoolean({ message: 'El voto debe ser una cadena de caracteres' })
    voto: boolean;
}
