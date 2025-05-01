import { IsString, IsNotEmpty, IsOptional } from "class-validator";
export class CreatePreguntaDto {

    @IsString()
    @IsNotEmpty()
    quizId:string; 

    @IsString()
    @IsNotEmpty()
    pregunta:string; 

    @IsString()
    @IsNotEmpty()
    respuesta:string; 

    @IsString()
    @IsOptional()
    opcion1:string; 

    @IsString()
    @IsOptional()
    opcion2:string; 

    @IsString()
    @IsOptional()
    opcion3:string; 
}
