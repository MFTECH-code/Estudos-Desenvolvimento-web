/*
32) Construir um algoritmo que calcule a média aritmética dos valores de um vetor de inteiros.
*/

function MediaAritimetica(vetor) {
    let total = 0;
    for (let i = 0; i <= vetor.length; i++) {
        if (vetor[i] != undefined) {
            total += vetor[i];
        }
    }
    let media = total / vetor.length;
    return `A média do vetor é ${media}`;
}

console.log(MediaAritimetica([2, 4]));

