import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { Modulo } from "src/modulo/entities/modulo.entity";

@Entity()
export class Quiz {

    @PrimaryGeneratedColumn('uuid')
    id:string

    @Column({default:1})
    numero: number;

    @ManyToOne(()=>Modulo, (modulo)=>modulo.quizzes)
    modulo:Modulo;

}
