import { IsNotEmpty, IsNumber, IsString, IsUUID } from "class-validator";

export class CreateModuloDto {
    @IsString()
    @IsNotEmpty()
    titulo: string;
    @IsNumber()
    number:number
    @IsUUID()
    cursoId: string;
}
