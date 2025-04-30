import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from "typeorm";
import { Quiz } from "src/quizzes/entities/quiz.entity";
import { Usuario } from "src/usuario/entities/usuario.entity";

@Entity()
export class Quizxusuario {

    @PrimaryGeneratedColumn('uuid')
    id:string; 

    @Column()
    calificacion: number; 

    @ManyToOne(()=>Usuario, (usuario)=>usuario.quizzesxusuarios)
    usuario: Usuario; 

    @ManyToOne(()=>Quiz, (quiz)=> quiz.quizzesxusuarios)
    quiz:Quiz; 
}
