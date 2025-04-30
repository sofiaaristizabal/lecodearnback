import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AdministradoresModule } from './administradores/administradores.module';
import { SeccionModule } from './seccion/seccion.module';
import { ModuloModule } from './modulo/modulo.module';
import { CursoModule } from './curso/curso.module';
import { UsuarioController } from './usuario/usuario.controller';
import { UsuarioModule } from './usuario/usuario.module';
import { CursoxusuariosModule } from './cursoxusuarios/cursoxusuarios.module';
import { QuizzesModule } from './quizzes/quizzes.module';
import { CursoIniciadosModule } from './curso-iniciados/curso-iniciados.module';
import { QuizxusuariosModule } from './quizxusuarios/quizxusuarios.module';
import { PreguntasModule } from './preguntas/preguntas.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type:'postgres',
      url: process.env.DATABASE_URL,
      synchronize:true,
      ssl:{
        rejectUnauthorized:false
      },
      autoLoadEntities:true
    }),
    AdministradoresModule,
    SeccionModule,
    ModuloModule,
    CursoModule,
    UsuarioModule,
    CursoxusuariosModule,
    QuizzesModule,
    CursoIniciadosModule,
    QuizxusuariosModule,
    PreguntasModule
  ],
  controllers: [AppController, UsuarioController],
  providers: [AppService],
})
export class AppModule {}
