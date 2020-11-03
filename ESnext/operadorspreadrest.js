// Operador...rest(juntar)/spread(espalhar)
// Usar rest como parâmetro de uma função

// Usar spread com objeto
const funcionario = { nome: 'Maria', salario: 12348.99 }
const clone = { ativo: true, ...funcionario } // Estou pegando todos os atributos de funcionario
console.log(clone)
console.log(funcionario)

// Usar spread com array
const grupoA = ['João', 'Pedro', 'Glória']
const grupoB = ['Maria', 'Rafaela', ...grupoA] // Estou colocando em uma array todos os elementos de outra array
console.log(grupoB)