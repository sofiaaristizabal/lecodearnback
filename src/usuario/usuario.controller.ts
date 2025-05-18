import { Controller } from '@nestjs/common';
import { Body, Get, Post, Delete, Patch, Param } from '@nestjs/common/decorators';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UsuarioService } from './usuario.service';
import { LoginUsuarioDto } from './dto/login-usuario.dto';
@Controller('usuario')
export class UsuarioController {
    constructor(private readonly usuarioService: UsuarioService) { }
    @Post()
    create(@Body() createUsuarioDto: CreateUsuarioDto) {
        return this.usuarioService.create(createUsuarioDto);
    }
    @Get()
    findAll() {
        return this.usuarioService.findAll();
    }
    @Patch(':id')
    update(@Param('id') id: string, @Body() updateUsuarioDto: CreateUsuarioDto) {
        return this.usuarioService.update(id, updateUsuarioDto);
    }
    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.usuarioService.remove(id);
    }
    @Post('login')
    async login(@Body() loginUsuarioDto: LoginUsuarioDto) {
        return this.usuarioService.login(loginUsuarioDto);
    }
}
