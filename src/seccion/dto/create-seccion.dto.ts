import { IsNumberString, IsString} from "class-validator";

export class CreateSeccionDto {
    @IsNumberString()
    numero: string;
    @IsString()
    titulo: string;
    @IsString()
    teoria: string;
    @IsString()
    ejemplo: string;
    @IsString()
    moduloId: string;
  }
  