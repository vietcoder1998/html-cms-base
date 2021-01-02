import 'reflect-metadata';
import express from 'express'
import bodyParser from 'body-parser'
import photoController from './controller/PhotoController';
import {createConnection} from "typeorm";
import dotenv from 'dotenv';
import { PhotoEntity } from './entity/PhotoEntity';
import { UserEntity } from './entity/UserEntity';
import { ProfileEntity } from './entity/ProfileEntity';
import { TemplateEntity } from './entity/TemplateEntity';
import pug from 'pug';
import path from 'path';
import userController from './controller/UserController';

dotenv.config() 
const host = process.env.HOST
// const prvkey = process.env.JWT_PRIVATE_KEY
// prvkey.replace(/\\n/gm, '\n')

createConnection({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: process.env.SQL_PW,
    database: "html_css_base",
    entities: [
        PhotoEntity,
        UserEntity,
        ProfileEntity,
        TemplateEntity
    ],
    synchronize: true,
    logging: false,
    
}).then(async connection => {
    // here you can start to work with your entities
}).catch(error => console.log(error));

const app = express()
app.use(bodyParser.json())
app.use("/user", userController )
app.use("/photo", photoController)
app.set("view engine", pug)
app.set('views', path.join(__dirname, 'views'));

// set index
app.get('/', (req, res) => {
    res.render('./views/index.pug')
})
app.listen(host, () => { 
    console.log(`server running in ${host}`) 
})