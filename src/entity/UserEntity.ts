import { profileEnd } from 'console';
import {Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn} from 'typeorm';
import { ProfileEntity } from './ProfileEntity';

@Entity()
export class UserEntity  {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        type: "text",
        nullable: false
    })
    username: string;

    @Column("text",{nullable: false})
    password: string;

    @Column("text",{nullable: true})
    access_token: string;

    @OneToOne(() => ProfileEntity)
    @JoinColumn()
    profile: ProfileEntity;
}