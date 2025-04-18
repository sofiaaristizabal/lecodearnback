import { IsNotEmpty, IsString } from 'class-validator';
export class CreateCursoDto {
    @IsString()
    @IsNotEmpty()
    nombre: string;

}