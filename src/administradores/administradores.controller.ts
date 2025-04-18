import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AdministradoresService } from './administradores.service';
import { CreateAdministradoreDto } from './dto/create-administradore.dto';
import { UpdateAdministradoreDto } from './dto/update-administradore.dto';
import { LoginAdministradorDto } from './dto/loginAdministradorDto';

@Controller('administradores')
export class AdministradoresController {
  constructor(private readonly administradoresService: AdministradoresService) {}

  @Post()
  create(@Body() createAdministradoreDto: CreateAdministradoreDto) {
    return this.administradoresService.create(createAdministradoreDto);
  }

  @Get()
  findAll() {
    return this.administradoresService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.administradoresService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAdministradoreDto: UpdateAdministradoreDto) {
    return this.administradoresService.update(id, updateAdministradoreDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.administradoresService.remove(id);
  }

  @Post('login')
  login (@Body() loginAdministradorDto: LoginAdministradorDto){
    return this.administradoresService.login(loginAdministradorDto); 
  }
}
