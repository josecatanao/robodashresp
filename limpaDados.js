//aqui vai limpar os dados
let csvToJson = require('convert-csv-to-json');
const Path = require('path')
const csv = Path.resolve(__dirname, 'files', 'distribuicao_respiradores.csv')
let json = csvToJson.getJsonFromCsv(csv);
for (let i = 0; i < json.length; i++) {
     console.log(`${json[i]}`)
}
