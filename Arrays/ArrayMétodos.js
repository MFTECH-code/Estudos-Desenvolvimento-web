const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']

// Método pop -> Remove o último elemento de uma array
pilotos.pop()
console.log(pilotos)
// Método push -> Adiciona um elemento no último índice de uma array
pilotos.push('Verstappen')
console.log(pilotos)
// Método shift -> Remove um elemento do primeiro índice
pilotos.shift()
console.log(pilotos)
// Método unshift -> Adiciona um elemento no primeiro índice
pilotos.unshift('Hamilton')
console.log(pilotos)
// Método splice -> Adiciona e remove elementos
// Adicionar elementos
pilotos.splice(2, 0, 'Bottas', 'Massa') // No do índice 2 adiciona Bottas e Massa
console.log(pilotos)
// Remover elementos
pilotos.splice(3, 1) // No índice 3 irei remover um elemento
console.log(pilotos) // Obs: o splice já reordena a array
// Método slice -> Retorna um novo array, apartir de um determinado índice
const algunsPilotos = pilotos.slice(2) // Nova array
console.log(algunsPilotos)
// Obs: O slice seria como pegar um pedaço da array
const algunsPilotos2 = pilotos.slice(1, 4) // Ele vai pegar do índice 1 até o índice 3
console.log(algunsPilotos2)