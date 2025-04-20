import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateQuizDto } from './dto/create-quiz.dto';
import { UpdateQuizDto } from './dto/update-quiz.dto';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { ModuloService } from 'src/modulo/modulo.service';
import { Quiz } from './entities/quiz.entity';

@Injectable()
export class QuizzesService {

  constructor(
    @InjectRepository(Quiz)
    private readonly quizRepository: Repository<Quiz>,

    private readonly moduloService: ModuloService
  ){}

  async create(createQuizDto: CreateQuizDto) {
   try{

    const modulo = await this.moduloService.findOne(createQuizDto.moduloId);
    const quiz = await this.quizRepository.create({
      numero: createQuizDto.numero,
      modulo
    });
    return quiz;
   }catch(err){
    console.log(err);
    throw new BadRequestException(err.detail)
   }
  }

  async findAll() {
    const quizzes = await this.quizRepository.find({})
    return quizzes; 
  }

  async findOne(id: string) {
    const quiz = await this.quizRepository.findOne({where: {id}})

    if (!quiz){
      throw new NotFoundException(`El quiz con id #${id} no existe`)
    }

    return quiz; 
  }

  async findByModulo(moduloId: string){
    return this.quizRepository.find({where: {modulo: {id: moduloId}}})
  }

  async update(id: string, updateQuizDto: UpdateQuizDto) {
    
    const quiz = await this.quizRepository.preload({id:id,...UpdateQuizDto});

    if(!quiz){
      throw new NotFoundException(`El quiz con id #${id} no existe`)
    }

    return quiz; 
  }

  async remove(id: string) {

    const quiz = await this.quizRepository.delete({id:id})
    return quiz;
  }
}
