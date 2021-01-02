import {Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable} from "typeorm";
import { TemplateEntity } from "./TemplateEntity";

@Entity({name: 'profile'})
export class ProfileEntity {

    @PrimaryGeneratedColumn()
    id: string;

    @Column('text', {nullable: true})
    name: string;

    @Column('text', {nullable: true})
    gmail: string;

    @ManyToMany(()=>TemplateEntity)
    @JoinTable({name: 'profile_template'})
    templateEntity: TemplateEntity
}