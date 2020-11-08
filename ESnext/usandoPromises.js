// Com promise
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

/*
let nomes = []
getTurma('A').then(alunos => {
    nomes = nomes.concat(alunos.map(a => `Turma A: ${a.nome}`))
    getTurma('B').then(alunos => {
        nomes = nomes.concat(alunos.map(a => `Turma B: ${a.nome}`))
        getTurma('C').then(alunos => {
            nomes = nomes.concat(alunos.map(a => `Turma C: ${a.nome}`))
            console.log(nomes)
        })
    })
})
*/

// Vantagem de usar promises
Promise.all([getTurma('A'), getTurma('B'), getTurma('C')]) // Promise.all executa todas as promises dada em uma array
    .then(turmas => [].concat(...turmas)) // Jogando o conteúdo das 3 arrays em 1 array
    .then(alunos => alunos.map(a => a.nome)) // Mapeando apenas os nomes
    .then(nomes => console.log(nomes)) // Imprimir no console array
    .catch(e => console.log(e.message)) // Se algo der errado imprima o erro

getTurma('D').catch(e => console.log(e.message))
