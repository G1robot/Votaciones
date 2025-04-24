import { Column, Entity, ObjectId, ObjectIdColumn } from "typeorm";

@Entity({ name: 'resultado' })
export class ResultadoEntity {
    @ObjectIdColumn()
    id: ObjectId; 

    @Column()
    partidoId: string;

    @Column()
    votos: number;
}
