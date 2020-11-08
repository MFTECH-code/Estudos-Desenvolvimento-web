// A função arrow sempre sera uma função anônima então sempre devemos armazenar ela em variaveis.

// Função Normal
let dobro = function (a) { 
    return a * 2;
}
// Função arrow
dobro = (a) => {
    // Note que na função arrow apnas usamos uma flecha para declarar a função...
    return a * 2;
}
// Podemos simplificar mais ainda essa função arrow
dobro = a => a * 2; // Quando temos apenas 1 parâmetro podemos tirar os parenteses e as chaves.
// Temos um retorno implicito. Usamos muito em funções que possuem apenas 1 linha.

ola = () => 'Olá'; // Podemos usar funções sem parâmetros.

console.log(dobro(Math.PI));