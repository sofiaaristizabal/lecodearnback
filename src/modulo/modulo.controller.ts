import { Body, Controller, Post, Get, Param, Patch, Delete } from '@nestjs/common';
import { ModuloService } from './modulo.service';
import { CreateModuloDto } from './dto/create-modulo.dto';
import { UpdateModuloDto } from './dto/update-modulo.dto';
@Controller('modulo')
export class ModuloController {
    constructor(private readonly moduloService: ModuloService){}
    @Post()
    create(@Body() createModuloDto: CreateModuloDto) {
        return this.moduloService.create(createModuloDto);
    }
    @Get()
    findAll(){
        return this.moduloService
    }
    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.moduloService.findOne(id);
    }
    @Get('curso/:cursoId')
    findByCurso(@Param('cursoId') cursoId: string) {
        return this.moduloService.findByCurso(cursoId);
    }
    @Patch(':id')
    update(@Param('id') id: string, @Body() updateModuloDto: UpdateModuloDto) {
        return this.moduloService.update(id, updateModuloDto);
    }
    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.moduloService.remove(id);
    }

}
