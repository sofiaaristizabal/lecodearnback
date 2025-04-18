import { Module } from '@nestjs/common';
import { ModuloService } from './modulo.service';
import { ModuloController } from './modulo.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Modulo } from './entities/modulo.entity';
import { Curso } from 'src/curso/entities/curso.entity';
@Module({
  providers: [ModuloService],
  controllers: [ModuloController],
  imports: [TypeOrmModule.forFeature([Modulo, Curso])],
  exports: [ModuloService],
})
export class ModuloModule {}
