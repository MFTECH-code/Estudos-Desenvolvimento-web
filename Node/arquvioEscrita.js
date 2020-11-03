// Escrevendo um arquivo com fs
const fs = require('fs')

const produto = {
    nome: "celular",
    preco: 1249.99,
    desconto: 0.15
}
// Queremos transformar produto em um texto
fs.writeFile(__dirname + '/arquivoGerado.json', JSON.stringify(produto), err => {
    console.log(err || "Arquivo salvo")
})

// Depois de executado, o arquivo foi gerado no formato JSON