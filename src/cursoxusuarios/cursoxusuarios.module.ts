import { Module } from '@nestjs/common';
import { CursoxusuariosService } from './cursoxusuarios.service';
import { CursoxusuariosController } from './cursoxusuarios.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Cursoxusuario } from './entities/cursoxusuario.entity';
import { CursoModule } from 'src/curso/curso.module';
import { UsuarioModule } from 'src/usuario/usuario.module';

@Module({
  controllers: [CursoxusuariosController],
  providers: [CursoxusuariosService],
  imports:[TypeOrmModule.forFeature([Cursoxusuario]), CursoModule, UsuarioModule]
})
export class CursoxusuariosModule {}
