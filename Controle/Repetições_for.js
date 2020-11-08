// A estrutura for é composta por: variável, condição e incremento...
// Usamos muito essa estrutura quando sabemos qual o limite de repetições e também para desempacotar variaveis compostas como objetos e arrays

for (let i = 1; i <= 10; i++) {
    console.log(`Contador = ${i}`);
}

const notas = [2, 5, 7, 9, 1, 8, 7];

for (let i = 0; i < notas.length; i++) {
    console.log(`Nota ${i} = ${notas[i]}`);
}

// Podemos utilizar uma forma muito mais simples usando o IN...

for (let i in notas) {
    let cont = 1;
    console.log(`Nota ${cont} = ${i}`);
}

// Existem maneiras de percorrer uma array muito mais simples do que o for, veremos elas mais pra frente

