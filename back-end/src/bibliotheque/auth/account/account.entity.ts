import { Entity, Column, PrimaryGeneratedColumn, BeforeInsert, PrimaryColumn } from 'typeorm';
import * as bcrypt from 'bcryptjs';


@Entity('users')
export class User {
  @PrimaryColumn()
  cpt_pseudo: string;
  @Column({ length: 500 })
  cpt_mot_de_passe: string;
  @Column({ length: 500 })
  cpt_sel: string;

  @BeforeInsert()
  hashPassword() {
    this.cpt_mot_de_passe = bcrypt.hashSync(this.cpt_mot_de_passe, 10);
  }
}
