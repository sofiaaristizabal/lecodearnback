import { Body, Controller, Post, Get, Param, Patch, Delete, UseGuards } from '@nestjs/common';
import { ModuloService } from './modulo.service';
import { CreateModuloDto } from './dto/create-modulo.dto';
import { UpdateModuloDto } from './dto/update-modulo.dto';
import { Roles } from 'src/auth/decorators/roles.decorators';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth/jwt-auth.guard';
import { Role } from 'src/auth/enums/role.enum';
import { RolesGuard } from 'src/auth/guards/roles/roles.guard';
@Controller('modulo')
export class ModuloController {
    constructor(private readonly moduloService: ModuloService){}
    //@Roles(Role.ADMIN)
    //@UseGuards(RolesGuard)
    //@UseGuards(JwtAuthGuard)
    @Post()
    create(@Body() createModuloDto: CreateModuloDto) {
        return this.moduloService.create(createModuloDto);
    }
    //@UseGuards(JwtAuthGuard)
    @Get()
    findAll(){
        return this.moduloService
    }
    //@UseGuards(JwtAuthGuard)
    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.moduloService.findOne(id);
    }
    //@UseGuards(JwtAuthGuard)
    @Get('curso/:cursoId')
    findByCurso(@Param('cursoId') cursoId: string) {
        return this.moduloService.findByCurso(cursoId);
    }
   // @Roles(Role.ADMIN)
    //@UseGuards(RolesGuard)
    //@UseGuards(JwtAuthGuard)
    @Patch(':id')
    update(@Param('id') id: string, @Body() updateModuloDto: UpdateModuloDto) {
        return this.moduloService.update(id, updateModuloDto);
    }
   // @Roles(Role.ADMIN)
    //@UseGuards(RolesGuard)
    //@UseGuards(JwtAuthGuard)
    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.moduloService.remove(id);
    }

}
