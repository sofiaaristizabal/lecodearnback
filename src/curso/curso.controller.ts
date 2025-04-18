import { Controller, Post } from '@nestjs/common';
import { Body, Get, Param, Patch, Delete } from '@nestjs/common/decorators';
import { CursoService } from './curso.service';
import { CreateCursoDto } from './dto/create-curso.dto';
@Controller('curso')
export class CursoController {
    constructor(private readonly cursoService: CursoService) { }
    @Post()
    create(@Body() createCursoDto: CreateCursoDto) {
        return this.cursoService.create(createCursoDto);
    }
    @Get()
    findAll() {
        return this.cursoService.findAll();
    }
    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.cursoService.findOne(id);
    }
    @Patch(':id')
    update(@Param('id') id: string, @Body() updateCursoDto: CreateCursoDto) {
        return this.cursoService.update(id, updateCursoDto);
    }
    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.cursoService.remove(id);
    }
}
