import express from 'express';
import { savePhoto } from '../repository/PhotoRepository';

export const router = express.Router();
/**
 * [base]
 */

router.get("/", (req: express.Request, res: express.Response) => {
    res.send({
        name: "oke"
    })
})

// simple login
router.get("/login/user-pass", (req: express.Request, res: express.Response) => {
    res.send("anny")
})


//simple set photo
router.post("/photo/create", (req: express.Request, res: express.Response) => {
    savePhoto().then(data => {
        res.send("Oke")
    })
})

//simple get
router.get("/photo/list", (req: express.Request, res: express.Response) => {
    savePhoto().then(data => {
        res.send(data)
    })
})