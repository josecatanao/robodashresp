const mongoose = require('mongoose')
require("dotenv").config()

function conecaoMongo() {

    mongoose.connect('mongodb+srv://teste:0000@cluster0.uyv4q.mongodb.net/bancoparateste?retryWrites=true&w=majority',{
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })

    const db = mongoose.connection;
    db.on("error", (error) => console.error(error));
    db.once("open", () => console.log("conectado com sucesso ao mongo"))
}

module.exports = conecaoMongo;