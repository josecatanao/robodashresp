const downloadDoCSV = require('./src/RealizaDownloadDoCSV');
const criaJson = require('./src/criaJson');
const limpaDados = require('./src/limpaDados');
const conectandoMongo = require('./src/bancoDeDados');
const express = require('express');

const Distribuicao = require('./models/dados.js')
conectandoMongo()

/*
async function teste(){
        await Distribuicao.create({DATA:"10/20/200"}) 
}

teste()
*/
downloadDoCSV().then(() => {
    criaJson()
    limpaDados()
})

const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
