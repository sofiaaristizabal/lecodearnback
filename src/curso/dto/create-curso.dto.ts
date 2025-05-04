import { IsNotEmpty, IsString, IsUrl, IsOptional } from 'class-validator';
export class CreateCursoDto {
    @IsString()
    @IsNotEmpty()
    nombre: string;

    @IsUrl()
    @IsOptional()
    imagen: string; 

}