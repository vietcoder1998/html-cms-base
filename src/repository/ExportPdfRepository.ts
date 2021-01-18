import { ExportPdfEntity } from '../entity/ExportPdfEntity';
import { ExportPdf } from '../model/ExportPdfModel';
import { getManager } from 'typeorm';
const fs = require('fs');
const pdf = require('html-pdf');

export async function saveExportPdf(exportPdf?: ExportPdf, file?: any) {
    let exportPdfEntity = new ExportPdfEntity()
    exportPdfEntity.content = exportPdf.content
    exportPdfEntity.title = exportPdf.title;

    // fs.append('./mynewfile1.html', exportPdfEntity.content, function (err: any) {
    //     if (err) throw err;
    //     console.log('Saved!');
    // });

    var options = { format: 'Letter' };
    let html = fs.readFileSync(`${__dirname}/template_html.html`, 'utf8');

    const res = await pdf.create(html, options).toFile(`${__dirname}/cv.pdf`)
    getManager().save(exportPdfEntity)

    return res
}

export async function getExportPdf(id?: string) {
    return getManager().find(ExportPdfEntity)
}

export async function deletExportPdf(id?: boolean) {
    return getManager().delete(ExportPdfEntity, id)
}