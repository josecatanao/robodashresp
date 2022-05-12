'use strict'
const Fs = require('fs')
const Path = require('path')
const Axios = require('axios')

async function downloadDoCSV() {
    const url = 'https://sage.saude.gov.br/dados/repositorio/distribuicao_respiradores.csv'
    const path = Path.resolve('././files', 'distribuicao_respiradores.csv')
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

module.exports = downloadDoCSV;