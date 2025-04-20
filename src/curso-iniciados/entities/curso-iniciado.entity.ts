import { Entity, Column, PrimaryGeneratedColumn, ManyToOne} from "typeorm";
import { Usuario } from "src/usuario/entities/usuario.entity";
import { Curso } from "src/curso/entities/curso.entity";
import { Modulo } from "src/modulo/entities/modulo.entity";

@Entity()
export class CursoIniciado {

    @PrimaryGeneratedColumn('uuid')
    id:string; 

    @ManyToOne(()=>Usuario, (usuario)=>usuario.cursosIniciados)
    usuario: Usuario;

    @ManyToOne(()=>Curso, (curso)=>curso.cursosIniciados)
    curso: Curso; 

    @ManyToOne(()=>Modulo, (modulo)=>modulo.cursosIniciados)
    modulo: Modulo; 


    
}
