const express = require('express');
const fs = require('fs')

const downloadDoCSV = require('./src/RealizaDownloadDoCSV');
const criaJson = require('./src/criaJson');
const limpaDados = require('./src/limpaDados');
const conectandoMongo = require('./src/bancoDeDados');
const insereValoresNoBanco = require('./src/insereValoresBD');
const Distribuicao = require('./models/dados');

const app = express();
const port = 3000;

conectandoMongo()

var distribuicaoJSON = ["ola"]



setInterval(() => {

    downloadDoCSV().then(() => {
        criaJson() 
        limpaDados()
        Distribuicao.deleteMany().then((valor) => {
            console.log("Banco de dados ajustado: ", valor.deletedCount)
        })
    })

    setTimeout(() => {
        insereValoresNoBanco()
        dataJson = fs.readFileSync('./files/distribuicao.json')
        distribuicaoJSON = JSON.parse(dataJson)
        console.log("valor json salvo no bonco de dados")
    }, 1);//5m
    console.log("Foi")
}, 120000);//10 m 

app.get('/', (req, res) => {
    res.json(distribuicaoJSON)
})


app.listen((process.env.PORT || 5000), () => {
    console.log(`Example app listening on port ${port}`)
})
