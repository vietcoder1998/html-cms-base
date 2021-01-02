import {Entity, Column, PrimaryGeneratedColumn} from 'typeorm';

@Entity({name: 'photo'})
export class PhotoEntity {
    @PrimaryGeneratedColumn()
    id: string;

    @Column({
        type: "text",
        nullable: true
    })
    name: string;

    @Column("text",{nullable: true})
    description: string;

    @Column("text",{nullable: true})
    filename: string;

    @Column("double",{nullable: true})
    views: number;

    @Column("boolean",{nullable: true})
    isPublished: boolean;
}