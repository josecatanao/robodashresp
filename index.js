const express = require('express');
const fs = require('fs');

const downloadDoCSV = require('./src/RealizaDownloadDoCSV');
const criaJson = require('./src/criaJson');
const limpaDados = require('./src/limpaDados');
const conectandoMongo = require('./src/bancoDeDados');
const insereValoresNoBanco = require('./src/insereValoresBD');
const Distribuicao = require('./models/dados');

const app = express();
const port = 3000;

conectandoMongo()


setInterval(() => {
    downloadDoCSV().then(() => {
        criaJson()
        limpaDados()
        Distribuicao.deleteMany().then((valor) => {
            console.log("Banco de dados limpos: ", valor.deletedCount)
       })
    })

    setTimeout(() => {
        insereValoresNoBanco()
    }, 60000);//1m
}, 120000);//2m 

app.get('/', (req, res) => {
    dataJson = fs.readFileSync('./files/distribuicao.json')
    distribuicaoJSON = JSON.parse(dataJson)
    res.json(distribuicaoJSON)
})


app.listen(/*(process.env.PORT || 5000)*/3000, () => {
    console.log(`Conectado na porta: ${port}`)
})
