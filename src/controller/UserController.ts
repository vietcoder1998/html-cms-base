import express from 'express';
import { createUser, getUser, getManyUser } from '../repository/UserRepository';
import { UserModel } from '../model/UserModel'
import ConfigResoponse from '../config/response';
import { ERR, MSG_SUCESS, SUCCESS, USER_ERR } from '../config/const';
import { ConfigException } from '../config/exception';

const userController = express.Router();

//TODO: validate

//TODO: getAccessToken

//TODO: updateAccessToken

//TODO: updateUserInfo

//TODO: createUser
userController.post("/create", (req: express.Request, res: express.Response) => {
    let userModel: UserModel = {
        username: req.body.username,
        password: req.body.password,
    };

    createUser(userModel).then(data => {
        if (data) {
            res.send(ConfigResoponse(SUCCESS, MSG_SUCESS, ""))
        }
    }).catch(err => {
        if (err) {
            res.send(ConfigException(ERR, "Error in create user", ""))
        }
    })
})

//TODO: get user
userController.get("/:id", (req: express.Request, res: express.Response) => {
    let params = req.params
    getUser(params.id).then(data => {
        if (data) {
            res.send(ConfigResoponse(
                SUCCESS,
                "Success on get user",
                data
            ))
        } else {
            res.send(res.send(ConfigException(
                USER_ERR.NOT_FOUND,
                "Error",
                "User not found",
            )))
        }

    })
})
//TODO: get many user
userController.post("/list", (req: express.Request, res: express.Response) => {
    let ids = req.body.ids;
    console.log(ids)
    getManyUser(ids).then(data => {
        if (data) {
            res.send(ConfigResoponse(
                SUCCESS,
                "Success on get user",
                data
            ))
        } else {
            res.send(res.send(ConfigException(
                USER_ERR.NOT_FOUND,
                "Error",
                "User not found",
            )))
        }
    })
})

//TODO: removeUser

//TODO: banUser


export default userController