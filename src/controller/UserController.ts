import express from 'express';
import { createUser } from '../repository/UserRepository';
import {UserModel} from '../model/UserModel'
import ConfigResoponse from '../config/response';
import { MSG_SUCESS, SUCCESS } from '../config/const';

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

    const rp =  createUser(userModel)
    res.send(ConfigResoponse(SUCCESS,MSG_SUCESS,""))
})

//TODO: removeUser

//TODO: banUser


export default userController