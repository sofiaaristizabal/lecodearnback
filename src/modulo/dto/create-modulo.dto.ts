import { IsNotEmpty, IsNumberString, IsString } from "class-validator";

export class CreateModuloDto {
    @IsString()
    @IsNotEmpty()
    titulo: string;
    @IsNumberString()
    numero:string;
    @IsString()
    cursoId: string;
}
