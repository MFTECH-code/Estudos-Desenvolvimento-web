/*
30) Escreva um algoritmo que percorre um vetor de inteiros e defina o maior e menor valor dentro do 
vetor.
*/


function MaiorMenor(vetor) {
    let maior = 0;
    let menor = vetor[0];
    for (let i = 0; i <= vetor.length; i++) {
        if (vetor[i] > maior) {
            maior = vetor[i];
        } else if (vetor[i] < menor) {
            menor =vetor[i];
        }
    }
    return `${maior} é o maior e ${menor} é o menor`;
}

const lista = [6, 9, 7, 2, 2, 3];
console.log(MaiorMenor(lista));