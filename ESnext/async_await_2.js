function gerarNumerosEntre(min, max, numerosProibidos) {
    if (min > max) {
        [max, min] = [min, max] // Destructuring
    }

    return new Promise((resolve, rejects) => {
        const fator = (max - min + 1)
        const aleatorio = parseInt(Math.random() * fator) + min
        if (numerosProibidos.includes(aleatorio)) {
            rejects('Número repetido...')
        } else {
            resolve(aleatorio)
        }
    })  
}

async function gerarMegaSena(qtdNumeros, tentativas = 1) {
    // Tratando erros em uma função async
    try {
        const numeros = []
        for (let _ of Array(qtdNumeros).fill()) { // Podemos fazer um for em cima da quantidade dos numeros sem ter que criar uma variavel
            numeros.push(await gerarNumerosEntre(1, 60, numeros))
        }
        return numeros
    } catch(e) {
        if (tentativas > 10) { // Se ocorrer o erro mais de 10 vezes, executaremos a excessão
            throw 'Ja foram geradas todas as possibilidades possíveis' // throw -> excessão, o erro será ignorado e será chamada a excessão
        } else {
            // Se der erro tentamos novamente
            return gerarMegaSena(qtdNumeros, tentativas + 1)
        }

    }
}

gerarMegaSena(8) 
    .then(console.log)
    .catch(console.log)