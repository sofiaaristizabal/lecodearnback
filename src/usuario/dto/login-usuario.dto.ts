import { IsEmail, IsString, Matches, MaxLength, MinLength } from "class-validator";

export class LoginUsuarioDto {
    @IsString()
    @IsEmail()
    email: string;
    @IsString()
    @MinLength(12)
    @MaxLength(50)
    @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {message: 'password too weak'})
    password: string;
}