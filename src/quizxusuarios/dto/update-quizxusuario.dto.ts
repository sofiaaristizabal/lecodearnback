import { PartialType } from '@nestjs/mapped-types';
import { CreateQuizxusuarioDto } from './create-quizxusuario.dto';

export class UpdateQuizxusuarioDto extends PartialType(CreateQuizxusuarioDto) {}
