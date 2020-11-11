const fs = require('fs') // Importando file system
const path = require('path') // Importando path

const caminho = path.join(__dirname, 'dados.txt') // Caminho absoluto do arquivo

function lerArquivo(caminho) {
    return new Promise(resolve => {
        fs.readFile(caminho, function(_, conteudo) {
            // Esse código também acontece de forma assíncrona
            // Dentro do método read file resolvemos a promessa
            resolve(conteudo.toString()) // Transformamos o conteudo em string para podermos trabalhar com ele
        })
        console.log("Depois de ler o arquivo") // Essa linha por ser síncrona será executada primeiro
    })
}

lerArquivo(caminho)
    .then(conteudo => conteudo.split('\r\n')) // Separando a string e colocando as partes em uma array
    .then(linha => linha.join(', ')) // Juntando tudo em uma string e separando por vígulas
    .then(conteudo => `O valor final é: ${conteudo}`)
    .then(console.log) 