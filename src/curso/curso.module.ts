import { Module } from '@nestjs/common';
import { CursoService } from './curso.service';
import { CursoController } from './curso.controller';
import { Type } from 'class-transformer';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Curso } from './entities/curso.entity';
@Module({
  providers: [CursoService],
  controllers: [CursoController],
  imports: [TypeOrmModule.forFeature([Curso])],
  exports: [CursoService],
})
export class CursoModule {}
