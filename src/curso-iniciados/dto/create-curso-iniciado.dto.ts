import { IsString, IsNotEmpty } from "class-validator";

export class CreateCursoIniciadoDto {

    @IsString()
    @IsNotEmpty()
    usuarioId: string; 

    @IsString()
    @IsNotEmpty()
    cursoId:string; 

    @IsString()
    @IsNotEmpty()
    moduloId:string; 
}
