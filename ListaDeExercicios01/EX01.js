/*
01) Crie uma função que dado dois valores (passados como parâmetros) mostre no console a soma, subtração,
multiplicação e divisão desses valores.
*/

function calculadora(x, y) {
    console.log(`A soma dos valoeres: ${x + y}`);
    console.log(`A subtração dos valoeres: ${x - y}`);
    console.log(`A divisão dos valoeres: ${x / y}`);
    console.log(`A multiplicação dos valoeres: ${x * y}`)
}

calculadora(10, 5);