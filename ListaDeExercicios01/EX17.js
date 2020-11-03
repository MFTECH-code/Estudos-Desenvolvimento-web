/*
17) Um funcionário irá receber um aumento de acordo com o seu plano de
trabalho, de acordo com a tabela abaixo:
Plano Aumento
A 10%
B 15%
C 20%
Faça uma função que leia o plano de trabalho e o salário atual de um funcionário e calcula e imprime o seu
novo salário. Use a estrutura switch e faça um caso default que indique que o plano é inválido.
*/

function AumentoSalarial(plano, salario) {
    switch(plano) {
        case 'A':
            return (salario * 0.1) + salario;
        case 'B':
            return (salario * 0.15) + salario;
        case 'C':
            return (salario * 0.2) + salario;
        default:
            return 'Plano inválido...';
    }
}

console.log(AumentoSalarial('A', 5000));
console.log(AumentoSalarial('B', 2500));
console.log(AumentoSalarial('C', 1250));
console.log(AumentoSalarial('D', 900));