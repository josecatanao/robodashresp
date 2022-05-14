const downloadDoCSV = require('./src/RealizaDownloadDoCSV');
const criaJson = require('./src/criaJson');
const limpaDados = require('./src/limpaDados');
const conectandoMongo = require('./src/bancoDeDados');
const express = require('express');
const fs =  require('fs')

const Distribuicao = require('./models/dados.js');
conectandoMongo()


downloadDoCSV().then(() => {
    criaJson()
    limpaDados()
})




async function insereValoresNoBanco() {
        try {
            const data  = fs.readFileSync('./files/distribuicao.json', 'utf-8')
            const valoresDistribuicao = JSON.parse(data)
            await Distribuicao.create(valoresDistribuicao)
    
            console.log("Salvo com sucesso")
    
        } catch (error) {
            console.log("apresentou algumas inconsistencias")
        }
        
    }
    
    insereValoresNoBanco()

const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
