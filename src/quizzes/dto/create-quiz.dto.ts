import { IsString, IsNotEmpty, IsNumber, IsOptional} from "class-validator";

export class CreateQuizDto {

    @IsString()
    @IsNotEmpty()
    moduloId:string; 

    @IsNumber()
    @IsOptional()
    numero: number; 

}
