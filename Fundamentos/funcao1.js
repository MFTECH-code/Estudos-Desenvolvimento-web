// O que é uma função? é um trecho de código que podemos utilizar no nosso código...

// Função sem retorno
function ImprimirSoma(a, b){
    console.log(a + b);
}

ImprimirSoma(2, 3);
// Caso você não coloque um parâmetro o valor será undefined e a soma será NaN...
ImprimirSoma(2);

// JS diferente de outras linguagens não reclama se você passar parâmetros a mais ou a menos...

// Função com retorno
function Soma(a, b = 0){
    return a + b;
}

console.log(Soma(1, 2));
console.log(Soma(2));