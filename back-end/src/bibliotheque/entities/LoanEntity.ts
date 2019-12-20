import {Column, Entity, PrimaryGeneratedColumn} from 'typeorm';

@Entity()
export class LoanEntity {
    @PrimaryGeneratedColumn()
    emp_id: number;
    @Column()
    emp_date_debut: Date;
    @Column()
    emp_date_fin: Date;
    @Column()
    emp_rendu: boolean;
    @Column({ length: 500 })
    cpt_pseudo: string;
    @Column()
    exp_id: number;
}