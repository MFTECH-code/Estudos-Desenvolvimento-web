const escola = [{
    nome: 'Turma M1',
    alunos: [{
        nome: 'Gustavo',
        nota: 8.1
    }, {
        nome: 'Ana',
        nota: 9.3
    }]
}, {
    nome: 'Turma M2',
    alunos: [{
        nome: 'Rebeca',
        nota: 8.9
    }, {
        nome: 'Roberto',
        nota: 7.3
    }]
}]

const getNotasAlunos = a => a.nota
const getNotasTurma = t => t.alunos.map(getNotasAlunos)
const notas1 = escola.map(getNotasTurma)
console.log(notas1) // Note que retornou uma array com duas arrays
// Queremos tudo em uma só array então usaremos o Flatmap, que nós vamos criar

Array.prototype.flatmap = function(callback) {
    return Array.prototype.concat.apply([], this.map(callback))
}
const notas2 = escola.flatmap(getNotasTurma)
console.log(notas2)
