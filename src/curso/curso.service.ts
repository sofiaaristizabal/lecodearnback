import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Curso } from './entities/curso.entity';
import { CreateCursoDto } from './dto/create-curso.dto';
import { UpdateCursoDto } from './dto/update-curso.dto';
@Injectable()
export class CursoService {
    constructor(
        @InjectRepository(Curso)
        private readonly cursoRepository: Repository<Curso>,
    ) { }
    async create(createCursoDto: CreateCursoDto) {
        const curso = this.cursoRepository.create(createCursoDto);
        return await this.cursoRepository.save(curso);
    }
    async findAll() {
        return await this.cursoRepository.find({ relations: ['modulos'] });
    }
    async findOne(id: string) {
        const curso = await this.cursoRepository.findOne({ where: { id }, relations: ['modulos'] });
        if (!curso) {
            throw new BadRequestException('Curso no encontrado');
        } else {
            return curso
        }
    }
    async update(id: string, updateCursoDto: UpdateCursoDto){
        const curso=await this.cursoRepository.preload({
            id,
            ...updateCursoDto,
        })
        if(!curso){
            throw new BadRequestException('Curso no encontrado')
        }else {
            return await this.cursoRepository.save(curso)
        }
    }
    async remove(id: string) {
        const curso=await this.findOne(id)
        return await this.cursoRepository.remove(curso)
    }
}