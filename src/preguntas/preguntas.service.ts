import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { CreatePreguntaDto } from './dto/create-pregunta.dto';
import { UpdatePreguntaDto } from './dto/update-pregunta.dto';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Pregunta } from './entities/pregunta.entity';
import { QuizzesService } from 'src/quizzes/quizzes.service';

@Injectable()
export class PreguntasService {

  constructor (
    @InjectRepository(Pregunta)
    private readonly preguntaRepository: Repository<Pregunta>, 

    private readonly quizService: QuizzesService
  ){}

  async create(createPreguntaDto: CreatePreguntaDto) {
    
    try {

      const quiz = await this.quizService.findOne(createPreguntaDto.quizId);
      const pregunta = await this.preguntaRepository.create({
        quiz, 
        pregunta: createPreguntaDto.pregunta,
        respuesta: createPreguntaDto.respuesta,
        opcion1: createPreguntaDto.opcion1,
        opcion2: createPreguntaDto.opcion2,
        opcion3: createPreguntaDto.opcion3
      })
      await this.preguntaRepository.save(pregunta)
      return pregunta; 

    }catch(err){
      console.log(err);
      throw new BadRequestException(err.detail);
    }
  }

  async findAll() {
    const preguntas = await this.preguntaRepository.find({})
    return preguntas;
  }

  async findOne(id: string) {
    const pregunta = await this.preguntaRepository.findOne({where:{id}})
    if(!pregunta){
      throw new NotFoundException(`La pregunta con id #${id} no se encontro`)
    }
    return pregunta;
  }

  async findByQuiz(quizId: string){
    const preguntas = await this.preguntaRepository.find({where: {quiz: {id: quizId}}}) 
    return preguntas; 
  }

  async update(id: string, updatePreguntaDto: UpdatePreguntaDto) {

    const pregunta = await this.preguntaRepository.preload({id:id,...updatePreguntaDto})
    if(!pregunta){
      throw new NotFoundException(`La pregunta con id #${id} no se encontro`)
    }
    return pregunta;
  }

  async remove(id: string) {

    const pregunta = await this.preguntaRepository.delete({id:id})
    return pregunta;
  }
}
