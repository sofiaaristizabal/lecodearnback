import { IsString, MinLength, MaxLength, Matches } from "class-validator"

export class CreateAdminDto{
    @IsString()
    email: string

    @IsString()
    @MinLength(12)
    @MaxLength(50)
    @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/,
                { message: 'password too weak' })
        password: string
}