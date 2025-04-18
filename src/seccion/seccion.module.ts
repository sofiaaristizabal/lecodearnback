import { Module } from '@nestjs/common';
import { SeccionController } from './seccion.controller';
import { SeccionService } from './seccion.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Seccion } from './entities/seccion.entity';
import { Modulo } from '../modulo/entities/modulo.entity';
@Module({
  controllers: [SeccionController],
  providers: [SeccionService],
  imports: [TypeOrmModule.forFeature([Seccion,Modulo])],
})
export class SeccionModule {}
