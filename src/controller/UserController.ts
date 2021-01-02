import express from 'express';
import { createUser, getUser, getManyUser } from '../repository/UserRepository';
import { UserModel } from '../model/UserModel'

const userController = express.Router();

//TODO: validate

//TODO: updateAccessToken

//TODO: updateUserInfo

//TODO: createUser
userController.post("/create", (req: express.Request, res: express.Response) => {
    let userModel: UserModel = {
        username: req.body.username,
        password: req.body.password,
    };
    createUser(userModel).then(data => res.send(data))
})

//TODO: get user
userController.get("/:id", (req: express.Request, res: express.Response) => {
    let params = req.params
    getUser(params.id).then(data => {
        res.send(data)
    })
})
//TODO: get many user
userController.post("/list", (req: express.Request, res: express.Response) => {
    let ids = req.body.ids;
    getManyUser(ids).then(data => {res.send(data)})
})

//TODO: removeUser

//TODO: banUser


export default userController