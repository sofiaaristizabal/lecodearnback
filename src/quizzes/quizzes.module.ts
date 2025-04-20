import { Module } from '@nestjs/common';
import { QuizzesService } from './quizzes.service';
import { QuizzesController } from './quizzes.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Quiz } from './entities/quiz.entity';
import { ModuloModule } from 'src/modulo/modulo.module';

@Module({
  controllers: [QuizzesController],
  providers: [QuizzesService],
  imports: [TypeOrmModule.forFeature([Quiz]), ModuloModule],
  exports: [QuizzesService]
})
export class QuizzesModule {}
