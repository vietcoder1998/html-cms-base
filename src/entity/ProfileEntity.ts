import {Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable} from "typeorm";
import { TemplateEntity } from "./TemplateEntity";

@Entity()
export class ProfileEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    gmail: string;

    @Column()
    access_token: string;

    @ManyToMany(()=>TemplateEntity)
    @JoinTable()
    templateEntity: TemplateEntity
}