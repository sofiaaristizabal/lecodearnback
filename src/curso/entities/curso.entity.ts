import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Modulo } from "src/modulo/entities/modulo.entity";
import { Cursoxusuario } from "src/cursoxusuarios/entities/cursoxusuario.entity";

@Entity('curso')
export class Curso {
    @PrimaryGeneratedColumn('uuid')
    id: string;
    @Column()
    nombre:string
    @OneToMany(()=>Modulo, (modulo)=> modulo.curso)
    modulos: Modulo[];

    @OneToMany(()=>Cursoxusuario, (cursoxusuario)=>cursoxusuario.curso)
    cursosxusuarios: Cursoxusuario[]; 
}