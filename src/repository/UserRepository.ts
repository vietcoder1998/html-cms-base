import { UserEntity } from "../entity/UserEntity";
import { UserModel } from "../model/UserModel";
// import * as jwt from 'jsonwebtoken';
import { getManager } from "typeorm";

//TODO: create user
export function createUser(userModel?: UserModel) {
    let userEntity = new UserEntity()
    userEntity.username = userModel.username
    userEntity.password = userModel.password

    let created_date = new Date().getTime()
    userEntity.created_date = created_date
    // userEntity.access_token = createAcessToken(userModel.username, userModel.password, created_date)
    return getManager().save(UserEntity, userEntity)
}
//TODO: update user
export function updateUser(userModel?: UserModel, id?: string) {
    let userEntity = new UserEntity()
    getManager().findOne(UserEntity, id);
    if (userModel.username) {
        userEntity.username = userModel.username
    }

    if (userModel.password) {
        userEntity.password = userModel.password
    }

    return getManager().update(UserEntity, id, userEntity)
}

//TODO: remove user
export function removeUser(id?: string) {
    return getManager().delete(UserEntity, id)
}
//TODO: get user
export function getUser(id?: string) {
    return getManager().findOne(UserEntity, id)
}
//TODO: get users
export function getManyUser(ids?: string[]){
    console.log(ids)
    return getManager().findByIds(UserEntity, ids)
}

//TODO: ban user
export function banUser(id?: string) {
    let userEntity = new UserEntity()
    getManager().findOne(UserEntity, id).then(res => {
        if (res) {
            userEntity = res
        }
    })

    return userEntity
}


//TODO: create accesstoken

/**
 *
 *
 */

// export function createAcessToken(username?: string, password?: string, created_date?: number): string{
//     let actoken = "abc";
//     jwt.sign({ foo: username+password }, created_date.toString(), { algorithm: 'RS256' },  (err, token) =>{
//         console.log(token);
//         if (token) {
//             this.actoken = token
//         }
//         throw err
//     })

//     return actoken;
// }