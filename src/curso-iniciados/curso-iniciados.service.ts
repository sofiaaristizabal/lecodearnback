import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateCursoIniciadoDto } from './dto/create-curso-iniciado.dto';
import { UpdateCursoIniciadoDto } from './dto/update-curso-iniciado.dto';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { UsuarioService } from 'src/usuario/usuario.service';
import { CursoService } from 'src/curso/curso.service';
import { ModuloService } from 'src/modulo/modulo.service';
import { CursoIniciado } from './entities/curso-iniciado.entity';

@Injectable()
export class CursoIniciadosService {

  constructor(
    @InjectRepository(CursoIniciado)
    private readonly cursoIniciadoRepository: Repository<CursoIniciado>,

    private readonly usuarioService: UsuarioService,
    private readonly cursoService: CursoService,
    private readonly moduloService: ModuloService
  ){}

  async create(createCursoIniciadoDto: CreateCursoIniciadoDto) {
    
    try{

      const usuario = await this.usuarioService.findOne(createCursoIniciadoDto.usuarioId);
      const curso = await this.cursoService.findOne(createCursoIniciadoDto.cursoId);
      const modulo = await this.moduloService.findOne(createCursoIniciadoDto.moduloId);

      const cursoIniciado = await this.cursoIniciadoRepository.create({
        usuario,
        curso,
        modulo
      });

      await this.cursoIniciadoRepository.save(cursoIniciado);
      return cursoIniciado; 

    }catch(err){
      console.log(err);
      throw new BadRequestException(err.detail)
    }
  }

  async findAll() {
    const cursosIniciados = await this.cursoIniciadoRepository.find({});
    return cursosIniciados;
  }

  async findOne(id: string) {
    const cursoIniciado = await this.cursoIniciadoRepository.find({where: {id}});

    if(!cursoIniciado){
      throw new NotFoundException(`El cursoIniciado con id #${id} no fue encontrado`)
    }
    return cursoIniciado;
  }

  async findByUser(userId:string){
    return await this.cursoIniciadoRepository.find({where: {usuario: {id: userId}}, relations:['curso', 'modulo']})
  }

  async update(id: string, updateCursoIniciadoDto: UpdateCursoIniciadoDto) {
    const cursoIniciado = await this.cursoIniciadoRepository.preload({id:id,...updateCursoIniciadoDto});
    if(!cursoIniciado){
      throw new NotFoundException(`El cursoIniciado con id #${id} no fue encontrado`)
    }
    return cursoIniciado;
  }

  async remove(id: string) {
    const cursoIniciado = await this.cursoIniciadoRepository.delete({id:id});
    return cursoIniciado;
  }
}
