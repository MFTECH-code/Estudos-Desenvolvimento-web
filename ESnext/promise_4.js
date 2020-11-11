function gerarNumerosEntre(min, max, tempo) {
    if (min > max) {
        [max, min] = [min, max] // Destructuring
    }

    return new Promise(resolve => {
        setTimeout(() => {
            const fator = (max - min + 1)
            const aleatorio = parseInt(Math.random() * fator) + min
            resolve(aleatorio)
        }, tempo)
    })
}

function gerarVariosNumeros() {
    // Como executar varias promises de uma só vez
    return Promise.all([
        // Array de promises
        gerarNumerosEntre(1, 60, 1000),
        gerarNumerosEntre(1, 60, 500),
        gerarNumerosEntre(1, 60, 3000)
    ])
}

gerarVariosNumeros()
    .then(numeros => console.log(numeros))
// Quando todas as promises forem resolvidas, é chamado o then.