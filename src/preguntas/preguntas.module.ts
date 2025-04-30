import { Module } from '@nestjs/common';
import { PreguntasService } from './preguntas.service';
import { PreguntasController } from './preguntas.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Pregunta } from './entities/pregunta.entity';
import { QuizzesModule } from 'src/quizzes/quizzes.module';

@Module({
  controllers: [PreguntasController],
  providers: [PreguntasService],
  imports:[TypeOrmModule.forFeature([Pregunta]), QuizzesModule]
})
export class PreguntasModule {}
