import { Column, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { Entity } from "typeorm/decorator/entity/Entity";
import { Cursoxusuario } from "src/cursoxusuarios/entities/cursoxusuario.entity";
import { CursoIniciado } from "src/curso-iniciados/entities/curso-iniciado.entity";
import { Quizxusuario } from "src/quizxusuarios/entities/quizxusuario.entity";
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
    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    creadoEn: Date; 

    @OneToMany(()=>Cursoxusuario, (cursoxusuario)=>cursoxusuario.usuario)
    cursosxusuarios: Cursoxusuario[]; 

    @OneToMany(()=>CursoIniciado, (cursoIniciado)=>cursoIniciado.usuario)
    cursosIniciados: CursoIniciado[]; 

    @OneToMany(()=>Quizxusuario, (quizxusuario)=> quizxusuario.usuario)
    quizzesxusuarios: Quizxusuario[];

}