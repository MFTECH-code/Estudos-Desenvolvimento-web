// Operador ternario muito usado para fazer uma condição em uma linha...

// Criamos uma função arrow que retorna a situação de um aluno...
const resultado = nota => nota >= 7 ? 'Aprovado' : 'Reprovado'
// ? -> Operador ternário caso for verdadeiro
// : -> Operador ternário caso for falso

console.log(resultado(5));