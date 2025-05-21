import { Controller } from '@nestjs/common';
import { Body, Get, Post, Delete, Patch, Param, UseGuards } from '@nestjs/common/decorators';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UsuarioService } from './usuario.service';
import { LoginUsuarioDto } from './dto/login-usuario.dto';
import { Roles } from 'src/auth/decorators/roles.decorators';
import { Role } from 'src/auth/enums/role.enum';
import { RolesGuard } from 'src/auth/guards/roles/roles.guard';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth/jwt-auth.guard';
import { CreateAdminDto } from './dto/create-admin.dto';
@Controller('usuario')
export class UsuarioController {
    constructor(private readonly usuarioService: UsuarioService) { }
    @Post()
    create(@Body() createUsuarioDto: CreateUsuarioDto) {
        return this.usuarioService.create(createUsuarioDto);
    }
    @Post('/admin')
    createAdmin(@Body() createAdminDto: CreateAdminDto) {
        return this.usuarioService.createAdmin(createAdminDto);
    }
   // @Roles(Role.ADMIN)
    //@UseGuards(RolesGuard)
    //@UseGuards(JwtAuthGuard)
    @Get()
    findAll() {
        return this.usuarioService.findAll();
    }
    //@UseGuards(JwtAuthGuard)
    @Get(':id')
     findOne(@Param('id') id: string) {
     return this.usuarioService.findOne(id);
    }
   
   // @UseGuards(JwtAuthGuard)
    @Get('email/:email')
     findByEmail(@Param('email') email: string) {
     return this.usuarioService.findByEmail(email);
    }
    @Patch(':id')
    update(@Param('id') id: string, @Body() updateUsuarioDto: CreateUsuarioDto) {
        return this.usuarioService.update(id, updateUsuarioDto);
    }

    //@Roles(Role.ADMIN)
    //@UseGuards(RolesGuard)
    //@UseGuards(JwtAuthGuard)
    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.usuarioService.remove(id);
    }
    @Post('login')
    async login(@Body() loginUsuarioDto: LoginUsuarioDto) {
        return this.usuarioService.login(loginUsuarioDto);
    }
}
