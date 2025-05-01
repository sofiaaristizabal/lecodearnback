import { Module } from '@nestjs/common';
import { QuizxusuariosService } from './quizxusuarios.service';
import { QuizxusuariosController } from './quizxusuarios.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Quizxusuario } from './entities/quizxusuario.entity';
import { UsuarioModule } from 'src/usuario/usuario.module';
import { QuizzesModule } from 'src/quizzes/quizzes.module';

@Module({
  controllers: [QuizxusuariosController],
  providers: [QuizxusuariosService],
  imports:[TypeOrmModule.forFeature([Quizxusuario]), UsuarioModule, QuizzesModule]
})
export class QuizxusuariosModule {}
