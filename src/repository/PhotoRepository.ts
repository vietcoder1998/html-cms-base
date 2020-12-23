import {getManager} from 'typeorm'
import { PhotoModel } from '../model/PhotoModel';
import { PhotoEntity } from '../entity/PhotoEntity';

export async function savePhoto(photo?: PhotoModel) {
    let photoEntity = new PhotoEntity()
    photoEntity.name = "Me and Bears";
    photoEntity.description = "I am near polar bears";
    photoEntity.filename = "photo-with-bears.jpg";
    photoEntity.views = 1;
    photoEntity.isPublished = true;

    return getManager().save(photoEntity)
}

export async function getPhoto(id?: string) {
    return getManager().find(PhotoEntity)
}