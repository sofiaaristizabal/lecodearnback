import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Modulo } from "src/modulo/entities/modulo.entity";
import { Cursoxusuario } from "src/cursoxusuarios/entities/cursoxusuario.entity";
import { CursoIniciado } from "src/curso-iniciados/entities/curso-iniciado.entity";
@Entity('curso')
export class Curso {
    @PrimaryGeneratedColumn('uuid')
    id: string;
    @Column('text')
    nombre:string

    @Column('text')
    image: string; 
    
    @OneToMany(()=>Modulo, (modulo)=> modulo.curso)
    modulos: Modulo[];    

    @OneToMany(()=>Cursoxusuario, (cursoxusuario)=>cursoxusuario.curso)
    cursosxusuarios: Cursoxusuario[]; 

    @OneToMany(()=>CursoIniciado, (cursoIniciado)=>cursoIniciado.curso)
    cursosIniciados: CursoIniciado[]; 

}