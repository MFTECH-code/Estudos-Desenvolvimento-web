// O método map retorna uma outra array, onde os elementos da array original estão transformados
// A segunda array deve ter exatamente o mesmo tamanho que a array original
const numeros = [1, 2, 3, 4, 5]
// Seria como um for com um propósito
let resultado = numeros.map(function (e) {
    return e * 2
    // Se não tiver retorno o resultado será undefined
}) // Recebe um callback como parâmetro

console.log(resultado)

const soma10 = e => e + 10
const triplo = e => e * 3
const dinheiro = e => `R$${parseFloat(e).toFixed(2).replace('.', ',')}`

// Podemos usar o método map de forma encadeada
let func1 = numeros.map(soma10).map(triplo).map(dinheiro)
console.log(func1)