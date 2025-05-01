import { BadRequestException, Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { CreateAdministradoreDto } from './dto/create-administradore.dto';
import { UpdateAdministradoreDto } from './dto/update-administradore.dto';
import { Administradore } from './entities/administradore.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import * as bcrypt from 'bcrypt';
import { LoginAdministradorDto } from './dto/loginAdministradorDto';

@Injectable()
export class AdministradoresService {

  constructor(@InjectRepository(Administradore)
  private readonly administradorRepository: Repository<Administradore>
  ){}

  async create(createAdministradoreDto: CreateAdministradoreDto) {
    try{
      const existe = await this.administradorRepository.findOneBy({ email: createAdministradoreDto.email });
      if (existe) {
        throw new BadRequestException('El administrador ya existe');
      }
      const administrador = this.administradorRepository.create(createAdministradoreDto);
      administrador.password = await bcrypt.hash(administrador.password, 10);
      await this.administradorRepository.save(administrador)
      return administrador
    }catch(err){
      console.log(err); 
      throw new BadRequestException(err.detail); 
    }
  }

  async findAll() {
    const administradores = await this.administradorRepository.find({})
    return administradores; 
  }

  async findOne(id: string) {

    const administrador = await this.administradorRepository.findOne({where:{id}})
    if(!administrador){
      throw new NotFoundException(`El administrador con id #${id} no existe`)
    }
    return administrador;
  }

  async update(id: string, updateAdministradoreDto: UpdateAdministradoreDto) {
    
    const administrador = await this.administradorRepository.preload({id:id,...UpdateAdministradoreDto})
    await this.administradorRepository.save(administrador);
    if(!administrador){
      throw new NotFoundException(`El administrador con id #${id} no fue encontrado`)
    }
    return administrador;
  }

  async remove(id: string) {

    const administrador = await this.administradorRepository.delete({id:id});
    return administrador;
  }

  async login (loginAdministradorDto: LoginAdministradorDto ){

    try{

      const {email, password} = loginAdministradorDto;
      const administrador = await this.administradorRepository.findOneBy({email})

      if(!administrador){
        throw new UnauthorizedException('Invalid credentials');
      }

      const isValid = bcrypt.compareSync(password, administrador.password);
      if(!isValid){
        throw new UnauthorizedException('Invalid credentials');
      }

      const {id} = administrador
      return {administrador: {email, id}}; 

    }catch(err){
      console.log(err);
      throw new UnauthorizedException(err.detail);
    }
  }
}
