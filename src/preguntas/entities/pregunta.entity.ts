import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { Quiz } from "src/quizzes/entities/quiz.entity";

@Entity()
export class Pregunta {
   
    @PrimaryGeneratedColumn('uuid')
    id: string; 

    @Column('text')
    pregunta: string; 

    @Column('text')
    respuesta: string; 

    @Column('text')
    opcion1: string; 

    @Column('text')
    opcion2: string; 

    @Column('text')
    opcion3: string; 
   
    @ManyToOne(()=> Quiz, (quiz)=>quiz.preguntas)
    quiz: Quiz; 

}
