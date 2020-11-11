const { resolve } = require("path")

function gerarNumerosEntre(min, max) {
    if (min > max) {
        [max, min] = [min, max] // Destructuring
    }

    return new Promise(resolve => {
        const fator = (max - min + 1)
        const aleatorio = parseInt(Math.random() * fator) + min
        resolve(aleatorio)
    })
}

gerarNumerosEntre(20, 60)
    .then(num => num * 10) // Multiplica o numero por 10
    .then(numX10 => `O número gerado foi ${numX10}`) // Cria uma template string mostrando o valor
    .then(console.log) // Mostrando o valor no console