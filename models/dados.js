const mongoose = require('mongoose')

/*
 {
  "DATA": "21/05/2020",
  "FORNECEDOR": "VYAIRE",
  "DESTINO": "ACRE",
  "ESTADO/MUNICIPIO": "ESTADO",
  "TIPO": "UTI",
  "QUANTIDADE":  20 ,
  "VALOR":  120000000 ,
  "DESTINATARIO": "Secretaria Estadual de Saúde",
  "UF": "AC",
  "DATADEENTREGA": "23/05/2020"
 }
*/

const Distribuicao = new mongoose.Schema({
    DATA: {
        type: String, 
        require: true
    },
    FORNECEDOR: {
        type: String,
        require: true
    },
    DESTINO: {
        type: String,
        require: true
    },
    ESTADOMUNICIPIO: {
        type: String,
        require: true
    },
    TIPO: {
        type: String,
        require: true
    },
    QUANTIDADE: {
        type: Number,
        require: true
    },
    VALOR: {
        type: Number,
        require: true
    },
    DESTINATARIO: {
        type: String,
        require: true
    },
    UF:{
        type: String,
        require: true
    },
    DATADEENTREGA:{
        type: String,
        require: true
    }

}, { collection: 'distribuicao' }
)

module.exports = mongoose.model('Distribuicao', Distribuicao)
