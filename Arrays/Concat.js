// Concat -> concatenação gera uma nova array
// Podemos contatenar quantos elementos quisermos pois aceita parâmetros variáveis

const filhas = ['Valeska', 'Cibalena']
const filhos = ['Uoxinton', 'Uesclei']
const todos = filhas.concat(filhos) // A array resultante será uma array com filhas e filhos
console.log(todos)

console.log([].concat([1, 2], [3, 4], 'Oi', 1, 2, 3)) // Parâmetros variáveis