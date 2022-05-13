const downloadDoCSV = require('./src/RealizaDownloadDoCSV');
const criaJson = require('./src/criaJson');
const limpaDados = require('./src/limpaDados');
const conectandoMongo = require('./src/bancoDeDados');
const express = require('express');

const Distribuicao = require('./models/dados.js')
conectandoMongo()


async function teste() {
    try {
        
        await Distribuicao.create(
            [{
                DATA: "21/05/2020",
                FORNECEDOR: "valerio",
                DESTINO: "ACRE",
                ESTADOMUNICIPIO:"ESTADO",
                TIPO: "UTI",
                QUANTIDADE:  20 ,
                VALOR:  120000000 ,
                DESTINATARIO: "Secretaria Estadual de Saúde",
                UF: "AC",
                DATADEENTREGA: "02/10/2000"
            }]
        )

        console.log("Salvo com sucesso")

    } catch (error) {
        console.log(error)
    }
    
}

teste()


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
