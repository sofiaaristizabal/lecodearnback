import { Controller, Post } from '@nestjs/common';
import { Body, Get, Param, Patch, Delete, UseGuards } from '@nestjs/common/decorators';
import { CursoService } from './curso.service';
import { CreateCursoDto } from './dto/create-curso.dto';
import { Roles } from 'src/auth/decorators/roles.decorators';
import { Role } from 'src/auth/enums/role.enum';
import { RolesGuard } from 'src/auth/guards/roles/roles.guard';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth/jwt-auth.guard';
@Controller('curso')
export class CursoController {
    constructor(private readonly cursoService: CursoService) { }
    //@Roles(Role.ADMIN)
    //@UseGuards(RolesGuard)
    //@UseGuards(JwtAuthGuard)
    @Post()
    create(@Body() createCursoDto: CreateCursoDto) {
        return this.cursoService.create(createCursoDto);
    }
   
   // @UseGuards(JwtAuthGuard)
    @Get()
    findAll() {
        return this.cursoService.findAll();
    }
   // @UseGuards(JwtAuthGuard)
    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.cursoService.findOne(id);
    }

   // @Roles(Role.ADMIN)
    //@UseGuards(RolesGuard)
   // @UseGuards(JwtAuthGuard)
    @Patch(':id')
    update(@Param('id') id: string, @Body() updateCursoDto: CreateCursoDto) {
        return this.cursoService.update(id, updateCursoDto);
    }

   // @Roles(Role.ADMIN)
    //@UseGuards(RolesGuard)
   // @UseGuards(JwtAuthGuard)
    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.cursoService.remove(id);
    }
}
