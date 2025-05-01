import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { QuizxusuariosService } from './quizxusuarios.service';
import { CreateQuizxusuarioDto } from './dto/create-quizxusuario.dto';
import { UpdateQuizxusuarioDto } from './dto/update-quizxusuario.dto';

@Controller('quizxusuarios')
export class QuizxusuariosController {
  constructor(private readonly quizxusuariosService: QuizxusuariosService) {}

  @Post()
  create(@Body() createQuizxusuarioDto: CreateQuizxusuarioDto) {
    return this.quizxusuariosService.create(createQuizxusuarioDto);
  }

  @Get()
  findAll() {
    return this.quizxusuariosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.quizxusuariosService.findOne(id);
  }

  @Get(':userId')
  findByUser(@Param('userId') userId:string){
    return this.quizxusuariosService.findByUser(userId);
  }

  @Get(':quizId')
  findByQuiz(@Param('quizId') quizId:string){
    return this.quizxusuariosService.findByQuiz(quizId);
  }


  @Patch(':id')
  update(@Param('id') id: string, @Body() updateQuizxusuarioDto: UpdateQuizxusuarioDto) {
    return this.quizxusuariosService.update(id, updateQuizxusuarioDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.quizxusuariosService.remove(id);
  }
}
