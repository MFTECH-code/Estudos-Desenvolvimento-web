// Podemos colocar parametros dentro de variáveis

function soma () {
    // Note que não coloquei nenhum parâmentro entre os parenteses...
    let soma = 0;
    // Vamos usar a array arguments que seria os nossos parametros...
    for (i in arguments) {
        soma += arguments[i];
    }
    return soma;
}

console.log(soma(5, 10, 18, 3, 8)); // Note que podemos colocar quantos parametros quisermos
// Essa é uma forma de colocar parâmetros indeterminados, quando não se sabe o número de parâmetros que se vai usar
