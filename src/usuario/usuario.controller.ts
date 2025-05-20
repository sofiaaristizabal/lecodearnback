import { Controller } from '@nestjs/common';
import { Body, Get, Post, Delete, Patch, Param, UseGuards } from '@nestjs/common/decorators';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UsuarioService } from './usuario.service';
import { LoginUsuarioDto } from './dto/login-usuario.dto';
import { Roles } from 'src/auth/decorators/roles.decorators';
import { Role } from 'src/auth/enums/role.enum';
import { RolesGuard } from 'src/auth/guards/roles/roles.guard';
@Controller('usuario')
export class UsuarioController {
    constructor(private readonly usuarioService: UsuarioService) { }
    @Post()
    create(@Body() createUsuarioDto: CreateUsuarioDto) {
        return this.usuarioService.create(createUsuarioDto);
    }
    @Roles(Role.ADMIN)
    @Get()
    findAll() {
        return this.usuarioService.findAll();
    }
    @Get(':id')
     findOne(@Param('id') id: string) {
     return this.usuarioService.findOne(id);
    }
    @Get('email/:email')
     findByEmail(@Param('email') email: string) {
     return this.usuarioService.findByEmail(email);
    }
    @Patch(':id')
    update(@Param('id') id: string, @Body() updateUsuarioDto: CreateUsuarioDto) {
        return this.usuarioService.update(id, updateUsuarioDto);
    }
    @UseGuards(RolesGuard)
    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.usuarioService.remove(id);
    }
    @Post('login')
    async login(@Body() loginUsuarioDto: LoginUsuarioDto) {
        return this.usuarioService.login(loginUsuarioDto);
    }
}
