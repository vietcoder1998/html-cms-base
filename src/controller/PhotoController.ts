import express from 'express';
import { savePhoto } from '../repository/PhotoRepository';

const photoController= express.Router();
/**
 * [base]
 */

photoController.get("/", (req: express.Request, res: express.Response) => {
    res.send({
        name: "oke"
    })
})

// simple login
photoController.get("/login/user-pass", (req: express.Request, res: express.Response) => {
    res.send("anny")
})


//simple set photo
photoController.post("/create", (req: express.Request, res: express.Response) => {
    savePhoto().then(data => {
        res.send("Oke")
    })
})

//simple get
photoController.get("/list", (req: express.Request, res: express.Response) => {
    savePhoto().then(data => {
        res.send(data)
    })
})

export default photoController