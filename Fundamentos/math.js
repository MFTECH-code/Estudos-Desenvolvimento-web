/*
    O objeto math é uma API do js que ja vem no JS e com ela podemos realizar varias operações matemáticas...
*/

// Calculando a area de uma circuferencia...

const raio = 5;
const area = Math.PI * Math.pow(raio, 2); // PI * raio elevado ao quadrado...

console.log(area.toFixed(2) + 'cm²');