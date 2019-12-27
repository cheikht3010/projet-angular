import {Column, Entity, PrimaryGeneratedColumn} from 'typeorm';

@Entity()
export class CopyEntity {
    @PrimaryGeneratedColumn()
    exp_id: number;
    @Column()
    lvr_isbn: string;
}