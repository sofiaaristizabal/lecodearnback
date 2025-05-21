import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { SeccionService } from './seccion.service';
import { CreateSeccionDto } from './dto/create-seccion.dto';
import { UpdateSeccionDto } from './dto/update-seccion.dto';
import { Roles } from 'src/auth/decorators/roles.decorators';
import { Role } from 'src/auth/enums/role.enum';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth/jwt-auth.guard';
import { RolesGuard } from 'src/auth/guards/roles/roles.guard';

@Controller('seccion')
export class SeccionController {
    constructor(private readonly seccionService: SeccionService) {}
    //@Roles(Role.ADMIN)
    //@UseGuards(RolesGuard)
    //@UseGuards(JwtAuthGuard)
   @Post()
    create(@Body() createSeccionDto: CreateSeccionDto) {
        return this.seccionService.create(createSeccionDto);
    }
    //@UseGuards(JwtAuthGuard)
    @Get()
    findAll() {
        return this.seccionService.findAll();
    }

   // @UseGuards(JwtAuthGuard)
    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.seccionService.findOne(id);
    }
   // @UseGuards(JwtAuthGuard)
    @Get('modulo/:idModulo')
    findByModulo(@Param('idModulo') idModulo: string) {
        return this.seccionService.findByModulo(idModulo);
    }
   // @Roles(Role.ADMIN)
   //@UseGuards(RolesGuard)
   // @UseGuards(JwtAuthGuard)
    @Patch(':id')
    update(@Param('id') id: string, @Body() updateSeccionDto: UpdateSeccionDto) {
        return this.seccionService.update(id, updateSeccionDto);
    }

   // @Roles(Role.ADMIN)
    //@UseGuards(RolesGuard)
    //@UseGuards(JwtAuthGuard)
   // @Delete(':id')
    remove(@Param('id') id: string) {
        return this.seccionService.remove(id);
    }
}

