import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Modulo } from "src/modulo/entities/modulo.entity";

@Entity('seccion')

export class Seccion{
@PrimaryGeneratedColumn('uuid')
id:string;
@Column()
numero: string
@Column()
titulo: string
@Column()
teoria: string
@Column()
ejemplo: string
@ManyToOne(()=>Modulo, (modulo)=>modulo.secciones, {onDelete:'CASCADE'})
modulo:Modulo
} 