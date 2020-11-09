const http = require('http')

const getTurma = letra => {
    const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`
    return new Promise((resolve, reject) => {
        http.get(url, res => {
            let resultado = ''
    
            res.on('data', dados => { // res.on 'data' -> carregamos os dados
                resultado += dados // Colocamos os dados dentro de uma string
            })
    
            res.on('end', () => { // res.on 'end' -> quando a requisição terminar
                try {
                    resolve(JSON.parse(resultado)) // Retorna a promise resolvida e convertemos para JSON
                } catch(e) { // Caso aconteça um erro
                    reject(e) // reject o erro
                }
            })
        })
    })
}

// Async/Await vieram para tornar a programação assíncrona mais semelhante com a síncrona
// Recurso do ES8, objetivo: simplificar o uso de promises
let obterAlunos = async () => {
    // Sempre que formos criar uma função asíncrona ela deve começar com async
    const turmaA = await getTurma('A') // Em vez de usar then, usamos await, fazendo com que o código pareça mais síncrono
    const turmaB = await getTurma('B')
    const turmaC = await getTurma('C')
    return [].concat(turmaA, turmaB, turmaC)
} // Uma função assíncrona retorna um objeto AsyncFunction, portanto devemos trabalhar com then para executar a função

obterAlunos()
    .then(alunos => alunos.map(aluno => aluno.nome)) // Pegando apenas os nomes dos alunos
    .then(nomes => console.log(nomes)) // Mostrando no console os nomes
