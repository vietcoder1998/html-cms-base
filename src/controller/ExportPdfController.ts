import express from 'express';
import { saveExportPdf } from '../repository/ExportPdfRepository';

const exportPdfController = express.Router();

exportPdfController.get("/", (req: express.Request, res: express.Response) => {
    res.send({
        name: "oke"
    })
})


//simple set exportPdf
exportPdfController.get("/list", (req: express.Request, res: express.Response) => {
    saveExportPdf().then(data => {
        res.send("ok")
    })
})

//simple get
exportPdfController.post("/create", (req: express.Request, res: express.Response) => {
    let body = req.body;
    let model: any = {
        title: null,
        content: null,
    }
    if (body) {

    }

    saveExportPdf(model).then(data => {
        console.log(data)
        res.download(data.filename)
    })
})

export default exportPdfController