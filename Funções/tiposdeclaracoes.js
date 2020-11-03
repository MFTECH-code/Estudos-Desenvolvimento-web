console.log(soma(3, 4));
// Function declaration
function soma(x, y) {
    return x + y;
    // Esse tipo de função nos permite que chamemos a função antes de ela ser declarada
    // O JS carrega todas as funções antes de executar todo o código.
}

// Function expression
const sub = function (x, y) {
    return x - y;
    // Qunado fazemos uma function expression perdemos a funcionalidade de executar antes da função.
}
console.log(sub(2, 1));
// Named function expression (pouco usada)
const mult = function mult(x, y) {
    return x * y;
    // O mesmo ocorre com esse tipo de função...
}  
console.log(mult(2, 5));
