import { UserEntity } from "../entity/UserEntity";
import { UserModel } from "../model/UserModel";
import jwt from 'jsonwebtoken';
import { getManager } from "typeorm";
import { ConfigException } from "../config/exception";
import { CODE, MSG } from "../config/const";
import ConfigResoponse from "../config/response";

//TODO: create user
export async function createUser(userModel?: UserModel) {
    let userEntity = new UserEntity();
    let condition = await getManager().find(UserEntity, {
        where: { 'username': userModel.username },
    })

    if (condition && condition.length > 0) {
        return ConfigException(
            CODE.USER_ERR.DUPLICATE_USER,
            MSG.USER_ERR.DUPLICATE_USER,
        )
    } else {
        userEntity.username = userModel.username;
        userEntity.password = userModel.password;
        let created_date = new Date().getTime()
        userEntity.created_date = created_date
        userEntity.access_token = createAcessToken(
            userModel.username,
            userModel.password,
            created_date
        )

        await getManager().save(UserEntity, userEntity)
        return ConfigResoponse(
            CODE.SUCCESS,
            MSG.SUCCESS,
        )
    }

}
//TODO: update user
export async function updateUser(userModel?: UserModel, id?: string) {
    let userEntity = new UserEntity()
    let condition = getManager().findOne(UserEntity, id);
    if (!condition) {
        return ConfigException(
            CODE.ERR,
            MSG.USER_ERR.NOT_FOUND
            
        )
    } else {
        if (userModel.username) {
            userEntity.username = userModel.username
        }

        if (userModel.password) {
            userEntity.password = userModel.password
        }

        await getManager().update(UserEntity, id, userEntity)
        return ConfigResoponse(
            CODE.SUCCESS,
            MSG.SUCCESS,
        )
    }
}

//TODO: remove user
export async function removeUser(id?: string) {
    return getManager().delete(UserEntity, id)
}
//TODO: get user
export async function getUser(id?: string) {
    if (!id) {
        return ConfigException(
            CODE.ERR,
            "thieu id nguoi dung",
        )
    } else {
        let data = await getManager().findOne(UserEntity, id)
        if (!data) {
            return ConfigException(
                CODE.USER_ERR.NOT_FOUND,
                MSG.USER_ERR.NOT_FOUND
            )
        } else {
            return ConfigResoponse(
                CODE.SUCCESS,
                MSG.SUCCESS,
                data
            )
        }
    }
}
//TODO: get many users
export async function getManyUser(ids?: string[]) {
    if (!ids||ids.length ===0) {
        return ConfigException(
            CODE.ERR,
            MSG.USER_ERR.NOT_FOUND,
        )
    } else {
        let data = await getManager().findByIds(UserEntity, ids)
        console.log(data)
        if (!data) {
            return ConfigException(
                CODE.USER_ERR.NOT_FOUND,
                MSG.USER_ERR.NOT_FOUND,
            )
        } else {
            return ConfigResoponse(
                CODE.SUCCESS,
                MSG.SUCCESS,
                data
            )
        }
    }
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
export function createAcessToken(username?: string, password?: string, created_date?: number): string {
    var actoken = "abc";
    jwt.sign({ foo: username + password + created_date }, 'ok', { algorithm: 'RS256' }, (err, token) => {
        console.log(token);
        if (token) {
            actoken = token
        }
    })

    return actoken;
}