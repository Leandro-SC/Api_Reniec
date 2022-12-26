const fs = require('fs');
const xl = require("excel4node");
const wb = new xl.Workbook();
var ws = wb.addWorksheet('Sheet 1');


class ConvertirExcel {


    dbPath = './db/database.json';
    constructor() {
        this.convertir();
    }

    convertir(data) {
        const headingColumnNames = [
            "id",
            "apellido_paterno",
            "apellido_materno",
            "nombres",
            "fecha_nacimiento"
        ]

        //Write Column Title in Excel file
        let headingColumnIndex = 1;
        headingColumnNames.forEach(heading => {
            ws.cell(1, headingColumnIndex++)
                .string(heading)
        });

        //Write Data in Excel file
        let rowIndex = 2;
        data.forEach(record => {
            let columnIndex = 1;
            Object.keys(record).forEach(columnName => {
                ws.cell(rowIndex, columnIndex++)
                    .string(record[columnName])
            });
            rowIndex++;
        });

        return wb.write('data.xlsx');

    }

    leerDB() {
        if (!fs.existsSync(this.dbPath)) return;
        const info = fs.readFileSync(this.dbPath, { encoding: 'utf-8' });
        const data = JSON.parse(info);
        return data;
    }



}

module.exports = ConvertirExcel;




















