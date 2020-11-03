/*
31) Escrever um algoritmo que percorre um vetor de inteiros, conta quantos números negativos há nesse vetor
e imprime a quantidade no console.
*/

function NegativeNumber(vetor) {
    let NumNegativo = 0;
    for (let i = 0; i <= vetor.length; i++) {
        if (vetor[i] < 0) {
            NumNegativo++;
        }
    }
    return `${NumNegativo} números são negativos nesse vetor...`
}

console.log(NegativeNumber([2, -5, 7, 3, -9, 8]));