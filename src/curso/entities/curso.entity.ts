import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Modulo } from "src/modulo/entities/modulo.entity";
@Entity('curso')
export class Curso {
    @PrimaryGeneratedColumn('uuid')
    id: string;
    @Column()
    nombre:string
    @OneToMany(()=>Modulo, (modulo)=> modulo.curso)
    modulos: Modulo[];
}