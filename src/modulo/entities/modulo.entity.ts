import { Seccion } from "src/seccion/entities/seccion.entity";
import { Curso } from "src/seccion/entities/curso.entity";

import { Column, Entity, ManyToMany, OneToMany, PrimaryGeneratedColumn } from "typeorm";

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
}