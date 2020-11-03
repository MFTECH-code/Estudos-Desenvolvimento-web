const aprovados = ['Ana', 'Juliana', 'Pedro', 'Paulo']

aprovados.forEach(function (nome, indice) { // Funciona de forma parecida com o for
    // Obrigatóriamente a callback deve ter um parâmetro, você poder ter 3 parâmetros mas se quiser pode usar apenas 1
    // 1º param -> Elemento
    // 2º param -> índice
    // 3º param -> array
    // Se eu passar mais que 3 parâmetros o retorno deles serão undefined
    console.log(`${indice + 1}: ${nome}`)
}) // Dentro do forEach passamos uma call back

aprovados.forEach(nome => console.log(nome)) // Usando uma arrow function
// A gente também pode armazenar a função na variável e usar no forEach
const exbirAprovado = nome => console.log(nome)
aprovados.forEach(exbirAprovado)