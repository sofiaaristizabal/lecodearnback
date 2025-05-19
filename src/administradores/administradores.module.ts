import { Module } from '@nestjs/common';
import { AdministradoresService } from './administradores.service';
import { AdministradoresController } from './administradores.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Administradore } from './entities/administradore.entity';
import { UsuarioModule } from 'src/usuario/usuario.module';


@Module({
  controllers: [AdministradoresController],
  providers: [AdministradoresService],
  imports:[TypeOrmModule.forFeature([Administradore])]
  
})
export class AdministradoresModule {}
