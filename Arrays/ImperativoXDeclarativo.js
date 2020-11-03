const alunos = [
    { nome: 'João', nota: 7.9 },
    { nome: 'Maria', nota: 9.2 }
]

// Imperativo
let total1 = 0
for (let i = 0; i < alunos.length; i++) {
    total1 += alunos[i].nota
}
console.log(`Imperativo: ${total1 / alunos.length}`)

// No modo imperativo não conseguimos reaproveitar tanto o código, pois uma coisa só ja faz tudo


// Declarativo
const getNota = aluno => aluno.nota
const soma = (total, atual) => total + atual
const total2 = alunos.map(getNota).reduce(soma)
console.log(`Declarativo: ${total2 / alunos.length}`)

// No declarativo nó conseguimos reutilizar os nossos códigos o que torna esse modo muito mais interessante