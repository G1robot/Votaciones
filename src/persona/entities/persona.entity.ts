import { Column, Entity, ObjectId, ObjectIdColumn } from "typeorm";

@Entity({name: 'persona'})
export class PersonaEntity {
    @ObjectIdColumn()
    id: ObjectId; 

    @Column()
    nombreCompleto: string; 

    @Column()
    ci: string;

    @Column()
    fechaNacimiento: Date;

    @Column()
    email: string;

    @Column()
    rol: string;

    @Column()
    voto:boolean;
}
