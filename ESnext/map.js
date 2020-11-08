const tecnologias = new Map()
tecnologias.set('react', { framework: false })
tecnologias.set('angular', { framework: true })

console.log(tecnologias)
// Para acessar um elemento usamos o método get
console.log(tecnologias.get('react').framework) // Retorna o valor

// Criando um Map de forma literal
const chavesVariadas = new Map([
    [function () {  }, 'Função'],
    [{}, 'Objeto'],
    [123, 'Número']
])

chavesVariadas.forEach((vl, chav) => {
    console.log(chav, vl)
})

console.log(chavesVariadas.has(123)) // Verificando se existe um elemento dentro do Map
chavesVariadas.delete(123) // Podemos excluir elementos com o método delete
console.log(chavesVariadas.has(123))
console.log(chavesVariadas.size) // Com o atributo .size sabemos quantos elementos existem na estrutura Map

// Podemos adicionar elementos na estrutura
chavesVariadas.set(123, 'a')
chavesVariadas.set(123, 'b')
console.log(chavesVariadas) // Não podem ter chaves iguais