import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('seccion')
export class Seccion{
@PrimaryGeneratedColumn('uuid')
id:string;
@Column()
numero: number
@Column()
titulo: string
@Column()
teoria: string
@Column()
ejemplo: string
@ManyToOne(()=>Modulo, (modulo)=>modulo.secciones, {onDelete:'CASCADE'})
modulo:Modulo
} 