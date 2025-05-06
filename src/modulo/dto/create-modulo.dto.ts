import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateModuloDto {
    @IsString()
    @IsNotEmpty()
    titulo: string;
    @IsNumber()
    number:number
    @IsString()
    cursoId: string;
}
