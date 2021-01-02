import express from 'express';
import { createUser, getUser, getManyUser, removeUser, updateUserPassword } from '../repository/UserRepository';
import { UserModel } from '../model/UserModel'

const userController = express.Router();

//TODO: validate

//TODO: updateAccessToken

//TODO: update user
userController.post("/:id", (req: express.Request, res: express.Response) => {
    let newpassword = req.body.newpassword
    let id = req.params.id
    updateUserPassword(newpassword, id).then(data => {
        res.send(data)
    })
})

//TODO: create user
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
userController.delete("/list", (req: express.Request, res: express.Response) => {
    let ids = req.body.ids;
    removeUser(ids).then(data => {res.send(data)})
})


//TODO: banUser


export default userController