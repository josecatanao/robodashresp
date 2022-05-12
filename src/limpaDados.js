var fs = require('fs');

function limpaDados() {

     fs.readFile('./files/distribuicao.json', 'utf-8', function (err, dadosDoArquivoJson) {
          if (err) throw err;
          dadosFormatadosSemPontoVirgula = dadosDoArquivoJson.replace(/[R][$][ ]/g, "").replace(/(?<="VALOR": ).*(?=,)/g, (dados) => {
               return dados.replace(`"`, " ").replace(`"`, " ").replace(",", "").replace(".", "").replace(".", "")
          })
          dadosFormatados = dadosFormatadosSemPontoVirgula.replace(/(?<="QUANTIDADE": ).*(?=,)/g, (dados) => {
               return dados.replace(`"`, " ").replace(`"`, " ")
          })

          fs.writeFile('./files/distribuicao.json', dadosFormatados, (err) => {
               if (err) throw err;
               console.log('O arquivo foi trasformado');
          });

     })

}

module.exports = limpaDados;