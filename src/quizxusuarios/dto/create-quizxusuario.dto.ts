import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateQuizxusuarioDto {

    @IsString()
    @IsNotEmpty()
    usuarioId: string; 

    @IsString()
    @IsNotEmpty()
    quizId: string; 

    @IsNumber()
    calificacion: number; 
}
