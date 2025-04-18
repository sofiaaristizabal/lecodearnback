import { MinLength } from "class-validator";
import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Administradore {

    @PrimaryGeneratedColumn('uuid')
    id:string;

    @Column('text', {unique:true})
    @MinLength(4)
    email: string; 

    @Column('text')
    @MinLength(8)
    password:string; 
}
