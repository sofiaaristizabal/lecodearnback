import { PartialType } from '@nestjs/mapped-types';
import { CreatePreguntaDto } from './create-pregunta.dto';

export class UpdatePreguntaDto extends PartialType(CreatePreguntaDto) {


}
