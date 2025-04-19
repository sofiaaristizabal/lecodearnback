import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Usuario } from './entities/usuario.entity';
import { CreateUsuarioDto } from './dto/create-usuario.dto';

@Injectable()
export class UsuarioService {
    constructor(
        @InjectRepository(Usuario)
        private readonly usuarioRepository: Repository<Usuario>,
      ) {}

    async create(createUsuarioDto: CreateUsuarioDto) {
        const existe = await this.usuarioRepository.findOneBy({ email: createUsuarioDto.email });
        if (existe) {
            throw new BadRequestException('El usuario ya existe');
        }
        const usuario = this.usuarioRepository.create(createUsuarioDto);
        return await this.usuarioRepository.save(usuario);
    }
    async findAll() {
        return await this.usuarioRepository.find();
    }
    async findOne(id: string) {
        const usuario = await this.usuarioRepository.findOneBy({ id });
        if (!usuario) {
            throw new BadRequestException('Usuario no encontrado');
        } else {
            return usuario;
        }
    }
    async update(id: string, updateUsuarioDto: CreateUsuarioDto) {
        const usuario = await this.usuarioRepository.preload({
            id,
            ...updateUsuarioDto,
        });
        if (!usuario) {
            throw new BadRequestException('Usuario no encontrado');
        } else {
            return await this.usuarioRepository.save(usuario);
        }
    }
    async remove(id: string) {
        const usuario = await this.findOne(id);
        return await this.usuarioRepository.remove(usuario);
    }
}