import 'reflect-metadata';
import express from 'express'
import bodyParser from 'body-parser'
import { router } from './controller/PhotoController';
import {createConnection} from "typeorm";
import dotenv from 'dotenv';
import { PhotoEntity } from './entity/PhotoEntity';

const env = dotenv.config() 

createConnection({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "123456",
    database: "tuyensinh",
    entities: [
        PhotoEntity
    ],
    synchronize: true,
    logging: false,
    
}).then(async connection => {
    // here you can start to work with your entities
}).catch(error => console.log(error));

const app = express()
app.use(bodyParser.json())
app.use("/api", router )

app.listen(3000, () => { 
    console.log("server running in 3000") 
})