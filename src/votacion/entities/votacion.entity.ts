import { Column, Entity, ObjectId, ObjectIdColumn } from "typeorm";

@Entity({name: 'votacion'})
export class VotacionEntity {
    @ObjectIdColumn()
    id: ObjectId; 

    @Column()
    partidoId: string;

    @Column()
    personaId: string;
}
