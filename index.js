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

var distribuicaoJSON = [{}]



setInterval(() => {

    downloadDoCSV().then(() => {
        criaJson() 
        limpaDados()
        Distribuicao.deleteMany().then((valor) => {
            console.log("Banco de dados limpos: ", valor.deletedCount)
        })
        console.log("Entrou na função downloadDoCSV")
    })

    setTimeout(() => {
        console.log("vai entrar na função insereValorNoBanco")
        insereValoresNoBanco()
        dataJson = fs.readFileSync('./files/distribuicao.json')
        distribuicaoJSON = JSON.parse(dataJson)
        console.log("intervalo do setTimeout")
    }, 60000);//1m
}, 120000);//2m

app.get('/', (req, res) => {
    res.json(distribuicaoJSON)
})


app.listen((process.env.PORT || 5000), () => {
    console.log(`Conectado na porta: ${port}`)
})
