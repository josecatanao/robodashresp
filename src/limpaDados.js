var fs = require('fs');

function limpaDados() {

     fs.readFile('./files/distribuicao.json', 'utf-8', function (err, dadosDoArquivoJson) {
          if (err) throw err;
          dadosFormatadosSemPontoVirgula = dadosDoArquivoJson.replace(/[R][$][ ]/g, "").replace(/(?<="VALOR": ).*(?=,)/g, (dados) => {
               return dados.replace(`"`, " ").replace(`"`, " ").replace(",", "").replace(".", "").replace(".", "")
          })

          dadosSemMultZeros = dadosFormatadosSemPontoVirgula.replace(/(?<="VALOR": ).*(?=,)/g, (dados) => {
               return dados.replace(` 000 `, "0")
          })
           
          dataFormatadaSemZero = dadosSemMultZeros.replace(/(?<="DATA": ).*(?=,)/g, (dados) => {
               return dados.replace("00:00", "")
          })

          dataFormatada = dataFormatadaSemZero.replace(/(?<="DATA": ).*(?=,)/g, (dados) => {
               valores = dados.split('/')
               return `"${valores[2]}/${valores[1]}/${valores[0]}"`.replace('"/',"/").replace('/"',"/")
          })
          
          dadosSembarra = dataFormatada.replace(/(?<="ESTADO).*(?=MUNICIPIO")/g, (dados) => {
               return dados.replace("/", "")
          })

          dadosDataModificado = dadosSembarra.replace(/(?<="DATADEENTREGA": ).*/g, (dados) => {
               return dados.replace("-", "0000/00/00")
          })


          dadosSemDuasBarras = dadosDataModificado.replace(/(?<="DATADEENTREGA": ).*/g, (dados) => {
               return dados.replace("//", "/")
          })

          dataSemMultZero = dadosSemDuasBarras.replace(/(?<="DATADEENTREGA": ).*/g, (dados) => {
               return dados.replace("0000","").replace(" ","")
          })

          dataEntragaFormatada = dataSemMultZero.replace(/(?<="DATADEENTREGA": ).*/g, (dados) => {
               valores = dados.split('/')
               return `"${valores[2]}/${valores[1]}/${valores[0]}"`.replace('"/',"/").replace('/"',"/")
          })

          valoresDedataCorretos = dataEntragaFormatada.replace(/(?<="DATADEENTREGA": ).*/g, (dados) => {
               return dados.replace("00/00/", "1000/01/01")
          })
          
          dadosFormatados = valoresDedataCorretos.replace(/(?<="QUANTIDADE": ).*(?=,)/g, (dados) => {
               return dados.replace(`"`, " ").replace(`"`, " ")
          })

          fs.writeFile('./files/distribuicao.json', dadosFormatados, (err) => {
               if (err) throw err;
               console.log('O arquivo foi limpo');
          });

     })

}

module.exports = limpaDados;