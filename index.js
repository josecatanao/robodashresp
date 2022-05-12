const downloadDoCSV = require('./RealizaDownloadDoCSV');
const criaJson = require('./criaJson');
const limpaDados = require('./limpaDados');



downloadDoCSV().then(()=>{
    criaJson()
    limpaDados()
})
