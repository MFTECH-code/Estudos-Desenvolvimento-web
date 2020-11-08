module.exports = function (...nomes) {
    return nomes.map(nome => `Boa semana ${nome}`)
}
// Os parâmetros de um módulo são os parâmetros da função exportada