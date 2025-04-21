import { PartidoEntity } from "src/partido/entities/partido.entity";
import { Column, Entity, ObjectId, ObjectIdColumn, OneToMany } from "typeorm";

@Entity({name: 'propuesta'})
export class PropuestaEntity {
    @ObjectIdColumn()
    id: ObjectId; 

    @Column()
    nombre: string; 
    
    @Column()
    descripcion: string;

    @Column()
    partidoId: string;
}
