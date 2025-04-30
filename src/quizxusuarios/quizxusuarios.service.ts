import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateQuizxusuarioDto } from './dto/create-quizxusuario.dto';
import { UpdateQuizxusuarioDto } from './dto/update-quizxusuario.dto';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Quizxusuario } from './entities/quizxusuario.entity';
import { UsuarioService } from 'src/usuario/usuario.service';
import { QuizzesService } from 'src/quizzes/quizzes.service';

@Injectable()
export class QuizxusuariosService {

  constructor(
    @InjectRepository(Quizxusuario)
    private readonly quizxusuarioRepository: Repository<Quizxusuario>,

    private readonly usuarioService: UsuarioService,
    private readonly quizService: QuizzesService
  ){}

  async create(createQuizxusuarioDto: CreateQuizxusuarioDto) {
    
    try{

      const usuario = await this.usuarioService.findOne(createQuizxusuarioDto.usuarioId);
      const quiz = await this.quizService.findOne(createQuizxusuarioDto.quizId);

      const quizxusuario = this.quizxusuarioRepository.create({
        usuario,
        quiz,
        calificacion: createQuizxusuarioDto.calificacion
      })
     await this.quizxusuarioRepository.save(quizxusuario);
     return quizxusuario; 
    }catch(err){
      console.log(err);
      throw new BadRequestException(err.detail); 
    }
  }

  async findAll() {
    const quizzesxusuarios= await this.quizxusuarioRepository.find({})
    return quizzesxusuarios;
  }

  async findOne(id: string) {
    const quizxusuario = await this.quizxusuarioRepository.findOne({where:{id}})
    if(!quizxusuario){
      throw new NotFoundException(`El quizxusuario con id #${id} no se encuentra`)
    }
    return quizxusuario;
  }

  async findByUser(userId: string){
    const quizzesxusuarios = await this.quizxusuarioRepository.find({where: {usuario: {id: userId}}, relations:['quiz']})
    return quizzesxusuarios;
  }

  async findByQuiz(quizId: string){
    const quizzesxusuarios = await this.quizxusuarioRepository.find({where: {quiz: {id: quizId}}, relations:['usuario']})
    return quizzesxusuarios; 
  }

  async update(id: string, updateQuizxusuarioDto: UpdateQuizxusuarioDto) {
     const quizxusuario = await this.quizxusuarioRepository.preload({id:id,...updateQuizxusuarioDto})
     if(!quizxusuario){
      throw new NotFoundException(`El quizxusuario con id #${id} no se encuentra`)
     }

     await this.quizxusuarioRepository.save(quizxusuario);
    return quizxusuario;
  }

  async remove(id: string) {

    const quizxusuario = await this.quizxusuarioRepository.delete({id:id})
    return quizxusuario;
  }
}
