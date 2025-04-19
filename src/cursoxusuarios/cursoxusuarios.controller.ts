import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CursoxusuariosService } from './cursoxusuarios.service';
import { CreateCursoxusuarioDto } from './dto/create-cursoxusuario.dto';
import { UpdateCursoxusuarioDto } from './dto/update-cursoxusuario.dto';

@Controller('cursoxusuarios')
export class CursoxusuariosController {
  constructor(private readonly cursoxusuariosService: CursoxusuariosService) {}

  @Post()
  create(@Body() createCursoxusuarioDto: CreateCursoxusuarioDto) {
    return this.cursoxusuariosService.create(createCursoxusuarioDto);
  }

  @Get()
  findAll() {
    return this.cursoxusuariosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.cursoxusuariosService.findOne(id);
  }

  @Get('usuario/:usuarioId')
  findByUser(@Param('usuarioId') usuarioId: string) {
    return this.cursoxusuariosService.findByUser(usuarioId);
  }

  @Get('curso/:cursoId')
  findByCurso(@Param('cursoId') cursoId: string) {
    return this.cursoxusuariosService.findByCurso(cursoId);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCursoxusuarioDto: UpdateCursoxusuarioDto) {
    return this.cursoxusuariosService.update(id, updateCursoxusuarioDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.cursoxusuariosService.remove(id);
  }
}
