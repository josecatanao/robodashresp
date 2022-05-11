'use strict'

const Fs = require('fs')
const Path = require('path')
const Axios = require('axios')
let csvToJson = require('convert-csv-to-json');

//função para baixar o csv
async function downloadDoCSV() {
    const url = 'https://sage.saude.gov.br/dados/repositorio/distribuicao_respiradores.csv'
    const path = Path.resolve(__dirname, 'files', 'distribuicao_respiradores.csv')
    const writer = Fs.createWriteStream(path)

    const response = await Axios({
        url,
        method: 'GET',
        responseType: 'stream'
    })

    response.data.pipe(writer)

    return new Promise((resolve, reject) => {
        writer.on('finish', resolve)
        writer.on('error', reject)
    })
}

//função para converter csv em json
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



downloadDoCSV().then(()=>{
    criandoJSON()  
})
