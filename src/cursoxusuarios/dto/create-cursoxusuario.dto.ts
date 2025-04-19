import { IsString, MinLength, IsNotEmpty, IsNumber } from "class-validator";

export class CreateCursoxusuarioDto {

    @IsString()
    @IsNotEmpty()
    usuarioId:string

    @IsString()
    @IsNotEmpty()
    cursoId:string; 

    @IsNumber()
    calificacion: number; 
}
