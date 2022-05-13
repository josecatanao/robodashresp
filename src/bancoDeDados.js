const mongoose = require('mongoose')
require("dotenv").config()

function conecaoMongo() {

    mongoose.connect(process.env.DATABASE_URL,{
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })

    const db = mongoose.connection;
    db.on("error", (error) => console.error(error));
    db.once("open", () => console.log("conectado com sucesso ao mongo"))
}

module.exports = conecaoMongo;