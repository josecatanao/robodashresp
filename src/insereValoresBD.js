const Distribuicao = require('../models/dados');
const fs =  require('fs')


async function insereValoresNoBanco() {
    try {
        const data  = fs.readFileSync('././files/distribuicao.json', 'utf-8')
        const valoresDistribuicao = JSON.parse(data)
        await Distribuicao.create(valoresDistribuicao)

        console.log("Salvo com sucesso")
    } catch (error) {
        console.log(error)
    }
}


module.exports = insereValoresNoBanco;