let csvToJson = require('convert-csv-to-json');
const Fs = require('fs')
const Path = require('path')

function criandoJSON() {

    const caminhoJson = Path.resolve(__dirname, 'files', 'distribuicao.json')

    Fs.writeFile(caminhoJson, "", (err) => {
        if (err) throw err;
        console.log('O arquivo foi criado!');
    });

    const csv = Path.resolve(__dirname, 'files', 'distribuicao_respiradores.csv')
    const json = Path.resolve(__dirname, 'files', 'distribuicao.json')

    let fileInputName = csv;
    let fileOutputName = json;

    csvToJson.generateJsonFileFromCsv(fileInputName, fileOutputName);
}

module.exports = criandoJSON;