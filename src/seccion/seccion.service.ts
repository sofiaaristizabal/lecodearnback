import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Seccion } from './entities/seccion.entity';
import { Repository } from 'typeorm';
import { CreateSeccionDto } from './dto/create-seccion.dto';
import { UpdateSeccionDto } from './dto/update-seccion.dto';
import { Modulo } from 'src/modulo/entities/modulo.entity';

@Injectable()
export class SeccionService {
    constructor(
        @InjectRepository(Seccion)
        private readonly seccionRepository: Repository<Seccion>,
        @InjectRepository(Modulo) 
        private readonly moduloRepository: Repository<Modulo>,
    ) {}
    async create(createSeccionDto: CreateSeccionDto){
        const modulo=await this.moduloRepository.findOneBy({id:createSeccionDto.moduloId});
        if(!modulo){
            throw new BadRequestException('Modulo no encontrado');
        }else {
            const seccion = this.seccionRepository.create({
                ...createSeccionDto,
                modulo, 
              });
              return await this.seccionRepository.save(seccion);
              
        }
    }
    async findAll() {
        return await this.seccionRepository.find({relations:['modulo']});

    }
    async findOne(id: string){
        const seccion = await this.seccionRepository.findOne({where: {id}, relations: ['modulo']});
        if(!seccion){
            throw new BadRequestException('Seccion no encontrada');
        }else {
            return seccion;
        }
    }
    async update(id: string, updateSeccionDto: UpdateSeccionDto) {
        const seccion = await this.seccionRepository.preload({
            id,
            ...updateSeccionDto,
        });
        if(!seccion){
            throw new BadRequestException('Seccion no encontrada');
        }else {
            return await this.seccionRepository.save(seccion);
        }
    }
    async remove(id: string) {
        const seccion = await this.findOne(id);
        return await this.seccionRepository.remove(seccion);
    }
}