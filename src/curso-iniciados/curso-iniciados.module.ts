import { Module } from '@nestjs/common';
import { CursoIniciadosService } from './curso-iniciados.service';
import { CursoIniciadosController } from './curso-iniciados.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CursoIniciado } from './entities/curso-iniciado.entity';
import { UsuarioModule } from 'src/usuario/usuario.module';
import { CursoModule } from 'src/curso/curso.module';
import { ModuloModule } from 'src/modulo/modulo.module';

@Module({
  controllers: [CursoIniciadosController],
  providers: [CursoIniciadosService],
  imports:[TypeOrmModule.forFeature([CursoIniciado]), UsuarioModule, CursoModule, ModuloModule]
})
export class CursoIniciadosModule {}
