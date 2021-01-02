import { UserEntity } from "../entity/UserEntity";
import { getManager } from "typeorm";
import { ProfileModel } from "../model/ProfileModel";
import { ProfileEntity } from "../entity/ProfileEntity";

//TODO: get profile
export function getProfile(id?: string|number) {
    return getManager().findOne(UserEntity, id)
}

//TODO: get many profile
export function getProfiles(ids: any[]){
    return getManager().findByIds(UserEntity, ids)
}

//TODO: remove profile
export function removeProfile(id: any){
    return getManager().delete(UserEntity, id)
}

//TODO: create profile
export function createProfile(profile?: ProfileModel){
    let profileEntity = new ProfileEntity()
    profileEntity.name = profile.name;

    return getManager().save(ProfileEntity, profileEntity)
}