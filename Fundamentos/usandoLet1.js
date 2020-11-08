/*
     O let diferentemente do var não é visto fora de seu bloco...
*/

var valor = 1;
{
    let valor = 2;
    console.log(`Dentro = ${valor}`);
} 
console.log(`Fora = ${valor}`);

// Ele só será visível dentro do bloco que ele estiver...

// Var vs Let..
// Var tem escopo global e de função
// Let tem escopo global, de função e de bloco