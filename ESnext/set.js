const { time } = require("console")
const { Z_NO_COMPRESSION } = require("zlib")

// Estrutura não indexada e não aceita repetição
const times = new Set()
// Podemos adicionar com o método add
times.add('Vasco')
// Podemos encadear chamadas
times.add('São Paulo').add('Palmeiras').add('Flamengo')
times.add('Vasco')

console.log(times)
console.log(times.size) // Podemos usar o método size para ver o tamanho da estrutura
console.log(times.has('Vasco')) // Verificamos se um elemento existe
times.delete('Vasco') // Podemos deletar com o método delete
console.log(times.has('Vasco'))

// Criando um set de forma literal
const nomes = ['Raquel', 'Lucas', 'Matheus', 'Lucas']
const nomesSet = new Set(nomes)
console.log(nomesSet)