import { BadRequestException, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Modulo } from './entities/modulo.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateModuloDto } from './dto/create-modulo.dto';
import { UpdateModuloDto } from './dto/update-modulo.dto';
import { Curso } from 'src/curso/entities/curso.entity';
import { CursoService } from 'src/curso/curso.service';
@Injectable()
export class ModuloService {
    constructor(
        @InjectRepository(Modulo)
        private readonly moduloRepository: Repository<Modulo>,
        @InjectRepository(Curso)
        private readonly cursoRepository: Repository<Curso>

    ) { }
    async create(createModuloDto: CreateModuloDto) {
        const curso = await this.cursoRepository.findOneBy({ id: createModuloDto.cursoId });
        if (!curso) {
            throw new BadRequestException('Curso no encontrado');
        } else {
            const modulo = this.moduloRepository.create({
                ...createModuloDto,
                curso,
            })
            return await this.moduloRepository.save(modulo);
        }
    }
    async findAll() {
        return await this.moduloRepository.find({ relations: ['curso'] });
    }
    async findOne(id: string) {
        const modulo = await this.moduloRepository.findOne({ where: { id }, relations: ['curso'] });
        if (!modulo) {
            throw new BadRequestException('Modulo no encontrado');
        } else {
            return modulo;
        }
    }

    async findByCurso(cursoId: string){
      const modulos = await this.moduloRepository.find({where: {curso: {id: cursoId}}});
      return modulos; 
    }

    async update(id: string, updateModuloDto: UpdateModuloDto){
        const modulo = await this.moduloRepository.preload(
            {id,
                ...updateModuloDto,
            })
            if(!modulo) {
                throw new BadRequestException('Modulo no encontrado');
            }  else {
                return await this.moduloRepository.save(modulo)
            }
    }async remove(id: string) {
        const modulo=await this.findOne(id)
        return await this.moduloRepository.remove(modulo)
    }
}   
