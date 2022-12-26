const XLSX = require("xlsx");
const fs = require('fs');

class ConversionSheet{

    dbPath = './db/database.json';

    constructor(){
        this.leerDB();
    }

    leerDB() {
        if (!fs.existsSync(this.dbPath)) return;
        const info = fs.readFileSync(this.dbPath, { encoding: 'utf-8' });
        const data = JSON.parse(info);

        const workSheet = XLSX.utils.json_to_sheet(data);
        const workBook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(workBook, workSheet,"datos_procesados");
        
        // XLSX.write(workBook,{bookType:'xlsx',type:'buffer'});
        // const archivo = XLSX.write(workBook,"data_documentos.xlsx");
        return XLSX.writeFile(workBook,"data_documentos.xlsx");
    }

    // convertToJson = (data)=>{
    //     const workSheet = XLSX.utils.json_to_sheet(data);
    //     const workBook = XLSX.utils.book_new();
    //     XLSX.utils.book_append_sheet(workBook, workSheet,"datos_procesados");
    //     XLSX.write(workBook,{bookType:'xlsx',type:'buffer'});
    //    XLSX.write(workBook,"data_documentos.xlsx");
    // }
    
}

module.exports = ConversionSheet;




















