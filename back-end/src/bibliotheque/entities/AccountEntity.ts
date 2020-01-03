import {Column, Entity, PrimaryColumn, BeforeInsert} from 'typeorm';
import * as crypto from 'crypto';

@Entity()
export class AccountEntity {
    @PrimaryColumn()
    cpt_pseudo: string;

    @Column({ length: 500 })
    cpt_mot_de_passe: string;

    @BeforeInsert()
    hashPassword() {
        this.cpt_mot_de_passe = crypto.createHmac('sha256', this.cpt_mot_de_passe.concat(this.cpt_sel)).digest('hex');
    }

    @Column({ length: 500 })
    cpt_sel: string;
}
