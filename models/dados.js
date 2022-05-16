const mongoose = require('mongoose')

const Distribuicao = new mongoose.Schema({
    DATA: {
        type: Date, 
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
        type: Date,
        require: true
    }

}, { collection: 'distribuicao' }
)

module.exports = mongoose.model('Distribuicao', Distribuicao)
