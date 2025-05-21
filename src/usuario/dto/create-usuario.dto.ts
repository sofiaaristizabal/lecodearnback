import { IsBoolean, IsNumber, IsString, IsDateString, Matches, MaxLength, MinLength } from "class-validator"

export class CreateUsuarioDto{
    @IsString()
    email: string
     @IsString()
     @MinLength(12)
     @MaxLength(50)
     @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/,
            { message: 'password too weak' })
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
    @IsDateString()
    creadoEn: string
}