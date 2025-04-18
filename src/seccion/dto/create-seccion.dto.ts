import { IsNumber, IsString, IsUUID } from "class-validator";

export class CreateSeccionDto {
    @IsNumber()
    numero: number;
    @IsString()
    titulo: string;
    @IsString()
    teoria: string;
    @IsString()
    ejemplo: string;
    @IsUUID()
    moduloId: string;
  }
  