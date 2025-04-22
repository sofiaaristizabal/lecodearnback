import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { Curso } from "src/curso/entities/curso.entity";
import { Usuario } from "src/usuario/entities/usuario.entity";

@Entity()
export class Cursoxusuario {

    @PrimaryGeneratedColumn('uuid')
    id:string; 

    @Column()
    calificacion:number; 

    @ManyToOne(()=> Curso, (curso)=>curso.cursosxusuarios)
    curso: Curso; 

    @ManyToOne(()=>Usuario, (usuario)=>usuario.cursosxusuarios)
    usuario: Usuario; 
}
