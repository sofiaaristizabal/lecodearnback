import { IsString, MinLength, MaxLength, IsEmail, Matches } from "class-validator";

export class CreateAdministradoreDto {

    @IsEmail()
    email:string;

    @IsString()
    @MinLength(12)
    @MaxLength(50)
    @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/,
        { message: 'password too weak' })
    password:string;

}
