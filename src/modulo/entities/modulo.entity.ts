import { Seccion } from "src/seccion/entities/seccion.entity";
import { Curso } from "src/curso/entities/curso.entity";
import { Quiz } from "src/quizzes/entities/quiz.entity";
import { CursoIniciado } from "src/curso-iniciados/entities/curso-iniciado.entity";
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Modulo{
    @PrimaryGeneratedColumn('uuid')
    id:string
    @Column()
    titulo:string
    @Column()
    numero:string
    @ManyToOne(()=>Curso, curso=> curso.modulos, {onDelete:'CASCADE'})
    curso:Curso
    @OneToMany(()=>Seccion, seccion=> seccion.modulo)
    secciones: Seccion[]
    @OneToMany(()=>Quiz, (quiz)=>quiz.modulo)
    quizzes: Quiz[]; 
    @OneToMany(()=>CursoIniciado, (cursoIniciado)=> cursoIniciado.modulo)
    cursosIniciados: CursoIniciado[];
}