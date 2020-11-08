/*
03) Crie uma função que recebe dois parâmetros, base e expoente, e retorne a base elevada ao expoente.
*/

function ElevandoPotencia(base, expoente = 2) {
    return base ** expoente;
}

console.log(ElevandoPotencia(5, 3));
console.log(ElevandoPotencia(5));