import { Column, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { Entity } from "typeorm/decorator/entity/Entity";
import { Cursoxusuario } from "src/cursoxusuarios/entities/cursoxusuario.entity";
@Entity()
export class Usuario{
    @PrimaryGeneratedColumn('uuid')
    id: string
    @Column()
    email: string
    @Column()
    password: string
    @Column()
    nombre:string 
    @Column({type:'date'})
    fecha_nacimiento:string
    @Column()
    pais:string 
    @Column()
    nivel_educacion: string
    @Column()
    vidas: number
    @Column({default:false})
    premium: boolean

    @OneToMany(()=>Cursoxusuario, (cursoxusuario)=>cursoxusuario.usuario)
    cursosxusuarios: Cursoxusuario[]; 

}