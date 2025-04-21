import { Column, Entity, ObjectId, ObjectIdColumn } from "typeorm";

@Entity({name: 'cronograma'})
export class CronogramaEntity {
    @ObjectIdColumn()
    id: ObjectId; 

    @Column()
    actividad: string; 
    
    @Column()
    descripcion: string;

    @Column()
    fecha: Date;

    @Column()
    hora: string;

    @Column()
    partidoId: string;
}
