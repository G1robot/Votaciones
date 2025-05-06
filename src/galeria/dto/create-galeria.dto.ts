import { IsOptional, IsString, Length } from "class-validator";

export class CreateGaleriaDto {
    @IsString({ message: 'La imagen debe ser una cadena de caracteres' })
    @Length(1, 500, { message: 'La imagen debe tener entre 1 y 500 caracteres' })
    foto: string; 

    @IsOptional()
    @IsString({ message: 'La descripcion debe ser una cadena de caracteres' })
    @Length(1, 500, { message: 'La descripcion debe tener entre 1 y 500 caracteres' })
    descripcion?: string;

    @IsString({ message: 'El partidoId debe ser una cadena de caracteres' })
    partidoId: string;
}
