import { Module } from '@nestjs/common';
import { UsuarioService } from './usuario.service';
import { UsuarioController } from './usuario.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Usuario } from './entities/usuario.entity';
import { LoginUsuarioDto } from './dto/login-usuario.dto';
@Module({
  providers: [UsuarioService],
  controllers: [UsuarioController],
  imports:[TypeOrmModule.forFeature([Usuario])],
  exports: [UsuarioService],
})
export class UsuarioModule {}
