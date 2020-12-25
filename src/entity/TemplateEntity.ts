import { profileEnd } from 'console';
import {Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn} from 'typeorm';
import { ProfileEntity } from './ProfileEntity';

@Entity()
export class TemplateEntity  {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        type: "nvarchar",
        nullable: true
    })
    name: string;

    @Column("text",{nullable: true})
    json_data: string;
}