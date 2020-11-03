// Podemos usar o destructuring em funções

function rand({max = 1000, min = 0}){
    const valor = Math.random() * (max - min) + min;
    return Math.floor(valor);
}

console.log(rand({max: 50, min: 10})); // Veja que usamos o destructuring...
// Nós podemos colocar os valores maximo e minimo dentro de um obj
const obj = {
    max: 30,
    min: 10
}
console.log(rand(obj));