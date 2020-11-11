const { resolve } = require("path")

function esperarPor(tempo = 2000) {
    return new Promise(function(resolve) {
        setTimeout(() => resolve(), tempo)
    })
}

// esperarPor(2000)
//     .then(() => console.log('Executando promise 1...'))
//     .then(esperarPor)
//     .then(() => console.log('Executando promise 2...'))
//     .then(esperarPor)
//     .then(() => console.log('Executando promise 3...'))

function retornarValor() {
    return new Promise((resolve) => {
        setTimeout(() => resolve(10), 5000)
    })
}

async function retornaValorRapido() {
    return 10 // Quando retornamos algo em uma função async, seria como retornasemos uma promise, o return seria como o resolve
}

// A ideia do async/await é ter um código que pareça síncrono mas ele é assíncrono
// Em vez de chamar a função then, o código vai esperar(await) e só depois de cumprido ele vai para próxima execução
async function executar() {
    // Sempre que temos uma função que retorna um promise, podemos usar ela junto com o await
    // Podemos mandar valores para as variáveis
    let valor = await retornaValorRapido()
    await esperarPor(2000)
    console.log(`Async/Await 1... ${valor}`)
    await esperarPor(2000)
    console.log(`Async/Await 2... ${valor + 1}`)
    await esperarPor(2000)
    console.log(`Async/Await 2... ${valor + 2}`)
    // O await espera a promise ser resolvida, e o código só continua quando a promise é resolvida
    // Parece um código síncrono mas é assíncrono
    return valor + 3
}

// Não podemos colocar o valor retornado da função diretamente em uma variável, pois dará retorno pendente
// Então nesse caso teremos que fazer uso do then
// executar()
//     .then(console.log)

// Ou podemos criar uma outra função que asyncrona para criar uma variavel para receber o valor
async function executarVerdade() {
    const res = await executar()
    console.log(res)
}

executarVerdade()

// executar()

// Em node não podemos usar o await fora de uma função async.
// Em deno podemos criar o await fora da função async