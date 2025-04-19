import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateCursoxusuarioDto } from './dto/create-cursoxusuario.dto';
import { UpdateCursoxusuarioDto } from './dto/update-cursoxusuario.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UsuarioService } from 'src/usuario/usuario.service';
import { CursoService } from 'src/curso/curso.service';
import { Cursoxusuario } from './entities/cursoxusuario.entity';

@Injectable()
export class CursoxusuariosService {

  constructor( 
   @InjectRepository(Cursoxusuario)
   private readonly cursoxusuarioRepository: Repository<Cursoxusuario>,

   private readonly usuarioService: UsuarioService,

   private readonly cursoService: CursoService

   ){}

  async create(createCursoxusuarioDto: CreateCursoxusuarioDto) {
    try{

      const usuario = await this.usuarioService.findOne(createCursoxusuarioDto.usuarioId);
      const curso = await this.cursoService.findOne(createCursoxusuarioDto.cursoId);

      const cursoxusuario = this.cursoxusuarioRepository.create({
        calificacion: createCursoxusuarioDto.calificacion,
        usuario,
        curso
      });
      return cursoxusuario;
    }catch(err){
       console.log(err);
       throw new BadRequestException(err.detail);
    }
  }

  async findAll() {

    const cursosxusuarios = await this.cursoxusuarioRepository.find({})
    return cursosxusuarios;
  }

  async findOne(id: string) {
    const cursoxusuario = await this.cursoxusuarioRepository.findOne({where:{id}})

    if(!cursoxusuario){
      throw new NotFoundException(`El cursoxusuario con id #${id} no existe`)
    }
    return cursoxusuario;
  }

  async findByUser(idUsuario: string){

    return await this.cursoxusuarioRepository.find({where:{usuario: {id: idUsuario}}, relations:['curso']})

  }

  async findByCurso(idCurso:string){

    return await this.cursoxusuarioRepository.findOne({where: {curso: {id: idCurso}}, relations:['usuario']})
  }

  async update(id: string, updateCursoxusuarioDto: UpdateCursoxusuarioDto) {
    
    const cursoxusuario = await this.cursoxusuarioRepository.preload({id:id,...updateCursoxusuarioDto});
    if(!cursoxusuario){
      throw new NotFoundException(`El cursoxusuario con id #${id} no existe`)
    }

    await this.cursoxusuarioRepository.save(cursoxusuario);

    return cursoxusuario;
  }

  async remove(id: string) {

    const cursoxusuario = await this.cursoxusuarioRepository.delete({id:id})
    return cursoxusuario;
  }
}
