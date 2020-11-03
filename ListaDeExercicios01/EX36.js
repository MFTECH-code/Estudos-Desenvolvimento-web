/*
36) Crie duas funções que recebem dois parâmetros, um vetor com apenas valores numéricos e um número
inteiro. Faça com que a primeira função retorne outro vetor que será resultado da multiplicação de cada
elemento pelo número passado como parâmetro. A segunda função fará o mesmo da primeira se e somente se
o valor do elemento for maior que 5.
*/

function Multiplicar(vetor, num) {
    let NovoVetor = [];
    for (let i = 0; i < vetor.length; i++) {
        NovoVetor.push(vetor[i] * num);
    }
    return NovoVetor;
}

function Multiplicar2(vetor, num) {
    let NovoVetor = [];
    for (let i = 0; i < vetor.length; i++) {
        if (vetor[i] > 5) {
            NovoVetor.push(vetor[i] * num);
        }
    }
    return NovoVetor;
}

console.log(Multiplicar([5, 6, 7, 2, 1, 3, 4, 5], 5));
console.log(Multiplicar2([5, 6, 7, 2, 1, 3, 4, 5], 5));
