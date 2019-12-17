import {Column, Entity, PrimaryGeneratedColumn} from 'typeorm';

@Entity()
export class ThemeEntity {
    @PrimaryGeneratedColumn()
    thm_id: number;
    @Column({ length: 500 })
    thm_libelle: string;
}