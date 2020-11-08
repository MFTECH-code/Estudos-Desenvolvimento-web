/*
10) Crie uma função que verifica se um número inteiro passado como parêmetro é divisível por 3 e retorne true
ou false.
*/

function Multiplo(Numero) {
    if (Numero % 3 == 0) {
        return true;
    } else {
        return false;
    }
}

console.log(Multiplo(3));
console.log(Multiplo(2));