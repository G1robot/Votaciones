import { Column, Entity, ObjectId, ObjectIdColumn } from "typeorm";

@Entity({name: 'persona'})
export class GaleriaEntity {
    @ObjectIdColumn()
    id: ObjectId;
    
    @Column()
    imagen: string;

    @Column()
    descripcion: string;
}
