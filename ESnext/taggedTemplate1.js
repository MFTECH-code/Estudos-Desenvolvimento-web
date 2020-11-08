// tagged template -> Processar o template dentro de uma função
function tag(partes, ...valores) {
    console.log(partes)
    console.log(valores)
    return 'Outra string'
}

const aluno = 'Gui'
const situacao = 'aprovado'

console.log(tag`${aluno} está ${situacao}.`)