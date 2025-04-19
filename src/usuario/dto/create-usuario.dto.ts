import { IsBoolean, IsNumber, IsString } from "class-validator"

export class CreateUsuarioDto{
    @IsString()
    email: string
    @IsString()
    password: string
    @IsString() 
    nombre: string
    @IsString()
    fecha_nacimiento: string
    @IsString()
    pais: string
    @IsString()
    nivel_educacion: string
    @IsNumber()
    vidas: number
    @IsBoolean()
    premium: boolean
}