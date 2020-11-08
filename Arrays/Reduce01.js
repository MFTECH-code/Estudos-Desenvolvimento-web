// O reduce é uma forma de transdormar uma array em um único valor
// Diferente dos outros métodos o callback do reduce possui 4 parâmetros obrigatórios
// Acumulador -> será o nosso indice 0
// Indice atual -> será nosso indice 1
// Index -> Mostra a posição de cada elemento
// Array -> Mostra toda a array
// Pode ter um valor inicial como parâmetro -> Será o primeiro elemento

const alunos = [
    { nome: 'João', nota: 7.5, bolsista: false },
    { nome: 'Carol', nota: 8.0, bolsista: true },
    { nome: 'Carlos', nota: 4.5, bolsista: false },
    { nome: 'Ana', nota: 6.5, bolsista: false }
]

const notas = alunos.map(a => a.nota) // Vamos extrair dos alunos apenas a nota
console.log(notas)
const total = notas.reduce((acumulador, valorAtual) => {
    // console.log(acumulador, valorAtual)
    return acumulador + valorAtual // Vamos somar todas as notas dos alunos
}, 10) // Se quisermos passar um ValorInicial devemos colocar ele depois da callback

console.log(total)