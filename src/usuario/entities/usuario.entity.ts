import { Column, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { Entity } from "typeorm/decorator/entity/Entity";
import { Cursoxusuario } from "src/cursoxusuarios/entities/cursoxusuario.entity";
import { CursoIniciado } from "src/curso-iniciados/entities/curso-iniciado.entity";
import { Quizxusuario } from "src/quizxusuarios/entities/quizxusuario.entity";
import { Role } from "src/auth/enums/role.enum";
@Entity()
export class Usuario{
    @PrimaryGeneratedColumn('uuid')
    id: string
    @Column()
    email: string
    @Column()
    password: string
    @Column({nullable: true})
    nombre:string 
    @Column({type:'date', nullable:true})
    fecha_nacimiento:string
    @Column({nullable: true})
    pais:string 
    @Column({nullable: true})
    nivel_educacion: string
    @Column({nullable: true})
    vidas: number
    @Column({default:false})
    premium: boolean
    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    creadoEn: Date;
    @Column({
        type: 'enum',
        enum: Role,
        default: Role.USER
    })
    role:Role;

    @OneToMany(()=>Cursoxusuario, (cursoxusuario)=>cursoxusuario.usuario)
    cursosxusuarios: Cursoxusuario[]; 

    @OneToMany(()=>CursoIniciado, (cursoIniciado)=>cursoIniciado.usuario)
    cursosIniciados: CursoIniciado[]; 

    @OneToMany(()=>Quizxusuario, (quizxusuario)=> quizxusuario.usuario)
    quizzesxusuarios: Quizxusuario[];

}