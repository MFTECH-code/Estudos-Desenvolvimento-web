/*
    var é uma variável...
*/ 

// Podemos colocar var dentro de um bloco e executar essa mesma var fora do bloco...
{
    var nome = 'Matheus';
    console.log(nome);
}
console.log(nome);

// Caso você coloque dentro de uma função a var somente sera executada dentro da função...

function teste(){
    var local = 123;
    console.log(local); // Só funciona dentro da função...
}

teste();
console.log(local); // -> Is not defined

// Ou seja, quando criamos uma variavel fora de uma função ela é uma variavel local
// Quando criamos fora de uma função ela é global