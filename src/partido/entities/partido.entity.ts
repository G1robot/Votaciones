import { ObjectId } from "mongodb";
import { Column, Entity, ObjectIdColumn } from "typeorm";

@Entity({name: 'partido'})
export class PartidoEntity {
    @ObjectIdColumn()
    id: ObjectId; 

    @Column()
    nombre: string; 

    @Column()
    siglas: string; 


    @Column()
    nombreCandidato: string;

    @Column()
    logo: string;

    @Column()
    fotoCandidato: string;

    @Column()
    descripcion: string;
}
