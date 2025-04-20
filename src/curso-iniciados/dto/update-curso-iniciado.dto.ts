import { PartialType } from '@nestjs/mapped-types';
import { CreateCursoIniciadoDto } from './create-curso-iniciado.dto';

export class UpdateCursoIniciadoDto extends PartialType(CreateCursoIniciadoDto) {}
