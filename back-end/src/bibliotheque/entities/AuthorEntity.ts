import {Column, Entity, PrimaryGeneratedColumn} from 'typeorm';

@Entity()
export class AuthorEntity {
    @PrimaryGeneratedColumn()
    aut_id: number;
    @Column({ length: 500 })
    aut_prenom: string;
    @Column({ length: 500 })
    aut_nom: string;
    @Column('text')
    aut_biographie: string;
}
