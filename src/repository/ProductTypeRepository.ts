import { ProductTypeEntity } from "../entity/ProductTypeEntity";
import { getManager } from "typeorm";
import { ProductTypeModel } from "../model/ProductTypeModel";

export function getProductType(id?: string|number) {
    return getManager().findOne(ProductTypeEntity, id)
}

export async function getProductTypes(ids: any[]){
    if (ids) {
        return await getManager().findByIds(ProductTypeEntity, ids)
    }

    return await getManager().find(ProductTypeEntity)
}

export function saveProductTypes(ids: any[]){
    return getManager().findByIds(ProductTypeEntity, ids)
}

export function saveProductType(productModel: ProductTypeModel){
    let productEntity = new ProductTypeEntity()
    productEntity.name = productModel.name
    productEntity.queryName = productModel.queryName

    return getManager().insert(ProductTypeEntity, productEntity)
}

export function removeProductType(id: any){
    return getManager().delete(ProductTypeEntity, id)
}

export function createProductType(profile?: ProductTypeModel){
    let profileEntity = new ProductTypeEntity()
    profileEntity.name = profile.name;
    return getManager().save(ProductTypeEntity, profileEntity)
}