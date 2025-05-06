import { Column, Entity, ObjectId, ObjectIdColumn } from "typeorm";

@Entity({name: 'galeria'})
export class GaleriaEntity {
    @ObjectIdColumn()
    id: ObjectId;
    
    @Column()
    foto: string;

    @Column()
    descripcion: string;

    @Column()
    partidoId: string;
}
