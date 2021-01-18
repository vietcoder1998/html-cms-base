import {UserEntity } from "../entity/UserEntity";
import {UserModel } from "../model/UserModel";
import jwt from 'jsonwebtoken';
import { getManager } from "typeorm";
import { ConfigException } from "../config/exception";
import { CODE, MSG } from "../config/const";
import ConfigResoponse from "../config/response";
import { type } from "os";

//TODO: create user
export async function createUser(userModel?:UserModel) {
    let userEntity = new UserEntity();
    let condition = await getManager().find(UserEntity, {
        where: { 'username': userModel.username },
    })

    console.log(condition)

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

        let jwt = await createAcessToken(
            userModel.username,
            userModel.password,
            created_date
        )

        userEntity.access_token = jwt;

        await getManager().save(UserEntity, userEntity)
        return ConfigResoponse(
            CODE.SUCCESS,
            MSG.SUCCESS,
        )
    }
}
//TODO: update user password
export async function updateUserPassword(newpassword?: string, id?: string) {
    let userEntity = await getManager().findOne(UserEntity, id);

    if (!userEntity) {
        return ConfigException(
            CODE.ERR,
            MSG.USER_ERR.NOT_FOUND
        )
    } else {
        userEntity.password = newpassword

        let jwt = await createAcessToken(
            userEntity.username,
            userEntity.password,
            userEntity.created_date
        )

        userEntity.access_token = jwt;

        let data = await getManager().update(UserEntity, id, userEntity);
        if (data && data.affected > 0) {
            return ConfigResoponse(
                CODE.SUCCESS,
                MSG.SUCCESS,
            )
        } else {
            return ConfigResoponse(
                CODE.USER_ERR.NOT_FOUND,
                MSG.USER_ERR.NOT_FOUND,
            )
        }
    }
}

//TODO: remove user
export async function removeUser(ids?: string[]) {
    if (!ids) {
        return ConfigException(
            CODE.USER_ERR.NOT_FOUND,
            MSG.USER_ERR.NOT_FOUND,
        )
    } else {
        let data = await getManager().delete(UserEntity, ids)

        if (data && data.affected > 0) {
            return ConfigResoponse(
                CODE.SUCCESS,
                MSG.SUCCESS
            )
        } else {
            return ConfigException(
                CODE.USER_ERR.NOT_FOUND,
                MSG.USER_ERR.NOT_FOUND
            )
        }
    }
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
    if (!ids || ids.length === 0) {
        return ConfigException(
            CODE.ERR,
            MSG.USER_ERR.NOT_FOUND,
        )
    } else {
        let data = await getManager().findByIds(UserEntity, ids)
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
export async function createAcessToken(username?: string, password?: string, created_date?: number | string) {
    if (typeof created_date === "number") {
        created_date = created_date.toString()
    }
    return await jwt.sign({
        username,
        password,
        created_date,
    }, created_date)
}