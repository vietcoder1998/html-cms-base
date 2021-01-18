import { getManager } from "typeorm";
import { ProductModel } from "../model/ProductModel";
import { ProductEntity } from "../entity/ProductEntity";

export function getProduct(id?: string|number) {
    return getManager().findOne(ProductEntity, id)
}

export async function getProducts() {
    return getManager().find(ProductEntity)
}

export async function getProductsByProductType(id: number){
    console.log(id)
    let data = await getManager().createQueryBuilder(ProductEntity, "product").where("product.product_type_id = :id", { id: id }).getMany()
    console.log(data)
    return data
}

export async function removeProduct(id: any){
    return getManager().delete(ProductEntity, id)
}

export async function saveProduct(){
    return getManager().save(ProductEntity)
}


export async function createProduct(product?: ProductModel){
    let productEntity = new ProductEntity()
    productEntity.name = product.name;

    return getManager().save(ProductEntity, productEntity)
}