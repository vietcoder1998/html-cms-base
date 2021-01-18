import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn, JoinTable } from 'typeorm';
import { ProductTypeEntity } from './ProductTypeEntity';

@Entity({name: 'product'})
export class ProductEntity {
    @PrimaryGeneratedColumn()
    id: string;

    @Column({
        type: "text",
        nullable: true
    })
    name: string;

    @Column("text",{nullable: true})
    description: string;

    @Column("double",{nullable: true})
    views: number;

    @Column("text",{nullable: true})
    imgUrl: string;
    
    @Column("text",{nullable: true})
    salary: string;

    @ManyToOne(()=> ProductTypeEntity, productType => productType.id)
    @JoinColumn({name: "product_type_id"})
    productType: ProductTypeEntity
}