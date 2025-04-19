import { Module } from '@nestjs/common';
import { UsuarioService } from './usuario.service';
import { UsuarioController } from './usuario.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Usuario } from './entities/usuario.entity';
@Module({
  providers: [UsuarioService],
  controllers: [UsuarioController],
  imports:[TypeOrmModule.forFeature([Usuario])]
})
export class UsuarioModule {}
