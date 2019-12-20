import {Column, Entity, PrimaryGeneratedColumn} from 'typeorm';

@Entity()
export class ManagerEntity {
    @PrimaryGeneratedColumn()
    mng_id: number;
    @Column({ length: 500 })
    mng_prenom: string;
    @Column({ length: 500 })
    mng_nom: string;
    @Column({ length: 500 })
    mng_fonction: string;
    @Column({ length: 500 })
    cpt_pseudo: string;
}