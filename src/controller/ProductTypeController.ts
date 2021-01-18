import express from 'express';
import { saveProductType, getProductTypes } from '../repository/ProductTypeRepository';
import { ProductTypeModel } from '../model/ProductTypeModel';

const productTypeController= express.Router();
/**
 * [base]
 */

productTypeController.get("/", (req: express.Request, res: express.Response) => {
    res.send({
        name: "oke"
    })
})

productTypeController.get("/login/user-pass", (req: express.Request, res: express.Response) => {
    res.send("anny")
})

productTypeController.post("/create", (req: express.Request, res: express.Response) => {
    let body =  req.body
    console.log(body)
    let productTypeModel =  new ProductTypeModel()
    productTypeModel.name = body.name;
    productTypeModel.queryName = body.queryName;
    saveProductType(productTypeModel).then((data: any) => {
        res.send(data)
    })
})

productTypeController.get("/list", (req: express.Request, res: express.Response) => {
    let ids =  req.body.ids;
    getProductTypes(ids).then((data: any) => {
        res.send(data)
    })
})

export default productTypeController