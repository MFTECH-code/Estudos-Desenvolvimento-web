/*
28) Ler um vetor de números inteiros e imprimir quantos são pares e quantos são ímpares.
*/


function ParesImpares(Vetor) {
    let qtdPares = 0;
    let qtdImpares = 0;

    for (let i = 0; i <= Vetor.length; i++) {
        if (Vetor[i] % 2 == 0) {
            qtdPares++
        } else if (Vetor[i] % 2 != 0 && Vetor[i] != undefined) {
            qtdImpares++
        }
    }
    return `${qtdPares} são pares e ${qtdImpares} são ímpares`;
}

console.log(ParesImpares([1, 2, 3, 4, 5]));