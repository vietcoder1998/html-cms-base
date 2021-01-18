import express from 'express';
import { getProducts, saveProduct, getProductsByProductType } from '../repository/ProductRepository';

const productController= express.Router();
/**
 * [base]
 */

productController.get("/", (req: express.Request, res: express.Response) => {
    res.send({
        name: "oke"
    })
})

productController.get("/list", (req: express.Request, res: express.Response) => {
    getProducts().then((data: any) => {
        res.send(data)
    })
})

productController.post("/list", (req: express.Request, res: express.Response) => {
    let id = req.body.productTypeId

    if (typeof id !=="number") {
        id = parseInt(id)
    }
    getProductsByProductType(id).then((data: any) => {
        res.send(data)
    })
})

productController.get("/list", (req: express.Request, res: express.Response) => {
    saveProduct().then(data => {
        res.send(data)
    })
})

export default productController