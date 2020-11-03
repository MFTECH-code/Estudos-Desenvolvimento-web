const alunos = [
    { nome: 'João', nota: 7.5, bolsista: false },
    { nome: 'Carol', nota: 8.0, bolsista: true },
    { nome: 'Carlos', nota: 4.5, bolsista: false },
    { nome: 'Ana', nota: 6.5, bolsista: true }
]

// Desafio 1: Todos os alunos são bolsistas?
const bolsista = alunos.map((a) => a.bolsista)
console.log(bolsista)
const desafio1 = bolsista.reduce((acumulador, valorAtual) => {
    if (!valorAtual) {
        acumulador.push(valorAtual)
    }
    return acumulador
}, [])
if (desafio1.indexOf(false) === 0) {
    console.log('Nem todos são bolsistas')
} else {
    console.log('Todos os alunos são bolsistas')
}
// Desafio 2: algum aluno é bolsista?
let contador = 0
const desafio2 = bolsista.reduce((acumulador, valorAtual) => {
    if (valorAtual === true) {
        contador++
    }
    return contador
}, [])
if (contador === 0) {
    console.log('Nenhum aluno é bolsista')
} else {
    console.log(`${desafio2} são bolsistas`)
}




// Resolução desafio 1
const todosBolsistas = (resultado, bolsista) => resultado && bolsista // Retorna true se todos forem bolsistas e false se tiver algum não bolsista
console.log(alunos.map(a => a.bolsista).reduce(todosBolsistas))

// Resolução desafio 2
const algumBolsista = (resultado, bolsista) => resultado || bolsista // Alguem tem que ser bolsist pra retornar true caso contrario retorna false
console.log(alunos.map(a => a.bolsista).reduce(algumBolsista))
