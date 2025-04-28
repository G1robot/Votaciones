import { IsEmail, IsString, Length } from "class-validator";

export class SignInDto{
    @IsString()
    ci:string;
}