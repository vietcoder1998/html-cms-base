import {Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn} from 'typeorm';
import { ProfileEntity } from './ProfileEntity';

@Entity({name: 'user'})
export class UserEntity  {
    @PrimaryGeneratedColumn()
    id: string;

    @Column({
        type: "text",
        nullable: false
    })
    username: string;

    @Column("text",{nullable: false})
    password: string;

    @Column("text",{nullable: true})
    access_token: string;

    @Column("bigint",{nullable: true})
    created_date: number;

    @OneToOne(() => ProfileEntity)
    @JoinColumn()
    profile: ProfileEntity;
}