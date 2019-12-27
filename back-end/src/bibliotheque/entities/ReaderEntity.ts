import {Column, Entity, PrimaryGeneratedColumn} from 'typeorm';

@Entity()
export class ReaderEntity {
    @PrimaryGeneratedColumn()
    lct_id: number;
    @Column({ length: 500 })
    lct_prenom: string;
    @Column({ length: 500 })
    lct_nom: string;
    @Column()
    lct_date_de_naissance: Date;
    @Column({ length: 5000 })
    lct_description: string;
    @Column()
    lct_date_adhesion: Date;
    @Column()
    lct_privacy: boolean;
    @Column({ length: 500 })
    cpt_pseudo: string;
}