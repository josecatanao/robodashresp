const mongoose = require('mongoose')


const Distribuicao = new mongoose.Schema({
    DATA:{
        type:String,
        require:true
    }
})

module.exports = mongoose.model('Distribuicao', Distribuicao)
