/*
12) Faça um algoritmo que calcule o fatorial de um número.
*/

function CalculoFatorial(Numero) {
    let mult = 1;
    let FatorialList = [];
    for (let i = Numero; i > 0; i--) {
        FatorialList.push(i);
        mult = mult * i;
    }
    console.log(`A fatorial de ${Numero} é ${mult}`);
}

CalculoFatorial(0);