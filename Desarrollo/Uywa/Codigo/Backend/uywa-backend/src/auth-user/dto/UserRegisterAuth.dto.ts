import { IsEmail, IsNotEmpty, IsNumber, IsString, MaxLength, MinLength } from "class-validator";


export class UserRegisterAuthDto {
    @IsString()
    @IsNotEmpty()
    nombre: string;
    @IsString()
    @IsNotEmpty()
    apellidos: string;
    @IsEmail()
    @IsNotEmpty()
    correo: string;
    @IsNumber()
    @IsNotEmpty()
    dni: number;
    @IsString()
    @IsNotEmpty()
    @MaxLength(20)
    @MinLength(5)
    password: string;
    @IsString()
    estado:String;
    @IsString()
    insignias: string;
}