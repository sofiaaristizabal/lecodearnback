import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CursoIniciadosService } from './curso-iniciados.service';
import { CreateCursoIniciadoDto } from './dto/create-curso-iniciado.dto';
import { UpdateCursoIniciadoDto } from './dto/update-curso-iniciado.dto';

@Controller('curso-iniciados')
export class CursoIniciadosController {
  constructor(private readonly cursoIniciadosService: CursoIniciadosService) {}

  @Post()
  create(@Body() createCursoIniciadoDto: CreateCursoIniciadoDto) {
    return this.cursoIniciadosService.create(createCursoIniciadoDto);
  }

  @Get()
  findAll() {
    return this.cursoIniciadosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.cursoIniciadosService.findOne(id);
  }

  @Get('usuario/:usuarioId')
  findByUser(@Param('usuarioId') usuarioId: string) {
    return this.cursoIniciadosService.findByUser(usuarioId); 
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCursoIniciadoDto: UpdateCursoIniciadoDto) {
    return this.cursoIniciadosService.update(id, updateCursoIniciadoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.cursoIniciadosService.remove(id);
  }
}
