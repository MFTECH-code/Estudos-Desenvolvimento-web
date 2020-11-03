// Laço de repetição for
for (let letra of "Cod3r") {
    console.log(letra)
}
// Com o for of, torna muito mais fácil percorrer arrays e string
const assuntosEcma = ['Map', 'Set', 'Promise']
for (let i in assuntosEcma) { // Com o in a gente consegue acesso aos indices
    console.log(i)
}

for (let assunto of assuntosEcma) { // Conseguimos acesso somente ao valor
    console.log(assunto)
}

const assuntosMap = new Map([
    ['Map', { abordado: true }],
    ['Set', { abordado: true }],
    ['Promise', { abordado: false }]
])

for (let assunto of assuntosMap) { // Irá mostrar as chaves e os valores juntos
    console.log(assunto)
}

for (let chave of assuntosMap.keys()) { // Irá mostrar todas as chaves
    console.log(chave)
}

for (let valor of assuntosMap.values()) { // Irá mostrar todos os valores
    console.log(valor)
}

for (let [ch, vl] of assuntosMap.entries()) { // Pegando somente as entradas
    console.log(ch, vl)
}