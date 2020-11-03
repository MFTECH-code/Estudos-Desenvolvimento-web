const moduloA = require('../../ModuloA')
console.log(moduloA.ola) // Note que mesmo escrevendo errado o nome do modulo, ele funcionou
// OBS: Funciona apenas no Mac e no windows, mas sempre respeite as letras maíusculas

const c = require('./PastaC')
// Podemos criar uma pasta que tenha um index e quando chamarmos e não precisamos chamar necessariamente o arquivo e sim a pasta
console.log(c.ola)

const http = require('http') // Módulo http, usado para criar um servidor local

http.createServer((req, res) => {
    res.write('Bom Dia')
    res.end()
}).listen(8080)

// Note que o código não parou de ser executado
// e se abrirmos no nosso navegador o localhost na porta 8080 iremos tem uma página 
// Se quisermos criar um módulo temos que ter um arquivo index  