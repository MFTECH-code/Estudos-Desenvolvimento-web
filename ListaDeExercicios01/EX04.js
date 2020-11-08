/*
04) Crie uma função que irá receber dois valores, o dividendo e o divisor. A função deverá imprimir o resultado
e o resto da divisão destes dois valores.
*/

function Divisão(dividendo, divisor) {
    const resultado = dividendo / divisor;
    const resto = dividendo % divisor;
    console.log(`A divisão dos dois números é: ${resultado}.`);
    console.log(`O resto da divisão é: ${resto}.`);
}

Divisão(5, 2);