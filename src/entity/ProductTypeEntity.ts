import { Entity, PrimaryGeneratedColumn, Column, OneToMany, JoinColumn } from 'typeorm';

@Entity({name: 'product_type'})
export class ProductTypeEntity {
    @PrimaryGeneratedColumn()
    id: string;

    @Column('text', {nullable: true})
    queryName: string;

    @Column('text', {nullable: true})
    name: string;

    @OneToMany(()=> ProductTypeEntity , product => product.id)
    @JoinColumn()
    productType: ProductTypeEntity
}