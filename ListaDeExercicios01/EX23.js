/*
23) Escreva um algoritmo que leia o código de um aluno e suas três notas. Calcule a média ponderada do
aluno, considerando que o peso para a maior nota seja 4 e para as duas restantes, 3. Mostre o código do
aluno, suas três notas, a média calculada e uma mensagem "APROVADO" se a média for maior ou igual a 5 e
"REPROVADO" se a média for menor que 5. Repita a operação até que o código lido seja negativo.
*/

function MediaEscolar(codigo, nota1, nota2, nota3) {
    const notas = [];
    notas.push(nota1);
    notas.push(nota2);
    notas.push(nota3);

    notas.sort((a, b) => { // O último elemento é o maior.
        if (a < b) {
            return -1;
        } else if (a > b) {
            return 1;
        } else if (a == b) {
            return 0;
        }
    });
    
    const MediaPonderada = ((notas[2] * 4) + (notas[1] * 3) + (notas[0] * 3)) / (4 + 3 + 3);
    if (MediaPonderada >= 5) {
        return `Cod: ${codigo}, notas: ${nota1}, ${nota2} e ${nota3}, Média Ponderada: ${MediaPonderada}: APROVADO`
    } else {
        return `Cod: ${codigo}, notas: ${nota1}, ${nota2} e ${nota3}, Média Ponderada: ${MediaPonderada}: REPROVADO`
    }
    
    
}

console.log(MediaEscolar(123, 2.8, 6, 3.5));