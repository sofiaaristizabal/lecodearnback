import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from "typeorm";
import { Modulo } from "src/modulo/entities/modulo.entity";
import { Quizxusuario } from "src/quizxusuarios/entities/quizxusuario.entity";
import { Pregunta } from "src/preguntas/entities/pregunta.entity";

@Entity()
export class Quiz {

    @PrimaryGeneratedColumn('uuid')
    id:string

    @Column({default:1})
    numero: number;

    @ManyToOne(()=>Modulo, (modulo)=>modulo.quizzes)
    modulo:Modulo;

    @OneToMany(()=>Quizxusuario, (quizxusuario)=>quizxusuario.quiz)
    quizzesxusuarios: Quizxusuario[]; 

    @OneToMany(()=>Pregunta, (pregunta)=>pregunta.quiz)
    preguntas: Pregunta[]; 
}
