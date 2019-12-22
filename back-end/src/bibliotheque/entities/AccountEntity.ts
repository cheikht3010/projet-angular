import {Column, Entity, PrimaryColumn} from 'typeorm';

@Entity()
export class AccountEntity {
    @PrimaryColumn()
    cpt_pseudo: string;
    @Column({ length: 500 })
    cpt_mot_de_passe: string;
    @Column({ length: 500 })
    cpt_sel: string;
}
