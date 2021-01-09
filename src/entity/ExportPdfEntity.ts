import {Entity, Column, PrimaryGeneratedColumn} from 'typeorm';

@Entity({name: 'export_pdf'})
export class ExportPdfEntity {
    @PrimaryGeneratedColumn()
    id: string;

    @Column({
        type: "text",
        nullable: true
    })
    title: string;

    @Column("text",{nullable: true})
    pdfLink: string;

    @Column("text",{nullable: true})
    content: string;
}