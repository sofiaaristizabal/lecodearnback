import { PartialType } from '@nestjs/mapped-types';
import { CreateCursoxusuarioDto } from './create-cursoxusuario.dto';

export class UpdateCursoxusuarioDto extends PartialType(CreateCursoxusuarioDto) {}
