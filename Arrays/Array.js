// O array em JS é um objeto, só que em vez de classificar seu atributos por keys, ela classifica por um indice
console.log(typeof Array, typeof new Array, typeof [])

// Formas de criar arrays

const aprovados = new Array('Maria', 'Ana', 'Pedro') // -> Forma não recomendade de se criar arrays
console.log(aprovados)

const reprovados = ['Paulo', 'Rose', 'Mercedes'] // -> Forma recomendada de se criar arrays
// Acessamos os elementos de uma array pelo indice
console.log(reprovados[0]) // Acessando o indice 0, o primeiro indice
console.log(reprovados[1])
console.log(reprovados[2])
console.log(reprovados[3]) // Não existe indice 3, logo o resultado sera undefined

// Adicionando elementos em uma array
reprovados[3] = 'Marcos'
console.log(reprovados[3]) // Essa forma é muito usada para substituir um elemento que já existe a partir do indice
reprovados.push('Alicia') // Usando o método push, adicionamos um novo elemento na ultima posição da array
console.log(reprovados)
// Como saber o tamanho de uma array
console.log(reprovados.length) // Usamos o método length para saber o tamanho de uma array

// Se por acaso eu tiver um elemento num indice 9 em uma array de 5 elementos
reprovados[9] = 'Roberto'
console.log(reprovados) // Os indices 5, 6, 7 e 8 recebem undefined
console.log(reprovados.length)
console.log(reprovados[8] === undefined)

// Como ordenar uma array
reprovados.sort() // -> O método sort ordena nossa array alfabéticamente e numericamente também
console.log(reprovados)

// Deletando elementos de uma array
delete reprovados[2]
console.log(reprovados)
// Quando deletamos um elemento da array, o indice ainda continua lá, só que com valor undefined, ou seja, a array não é 
reprovados[2] = 'Mercedes'
reprovados.splice(1, 1, 'ElementoTrocado') // -> O método splice deleta apartir do indice escolhido, um numero de indices escolhido
// (indiceInicial, ElementosAdeletar, ElementoReserva)
console.log(reprovados)
// O método splice é muito flexivel, podemos trocar elementos apartir de um determinado indice, ou deletar e reordenar uma array, apartir de um novo incice