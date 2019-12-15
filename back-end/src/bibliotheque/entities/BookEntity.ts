import {Column, Entity, PrimaryGeneratedColumn} from 'typeorm';

@Entity()
export class BookEntity {
    @PrimaryGeneratedColumn()
    lvr_isbn: string;
    @Column({ length: 500 })
    lvr_titre: string;
    @Column()
    lvr_date_de_publication: Date;
    @Column()
    lvr_nombre_exemplaire: number;
    @Column()
    aut_id: number;
    @Column()
    thm_id: number;
}
