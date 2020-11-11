// Tratamento de erro em promises
function funcionarOuNao(valor, chanceErro) {
    return new Promise((resolve, rejects) => { // rejects -> Usamos para um possível erro na promessa
        // Também podemos usar o bloco try catch
        try {
            // con.log('123') Se acontecer um erro, ele irá até o primeiro tratamento de erro que ele encontrar, no caso no segundo then
            if (Math.random() < chanceErro) {
                // erro
                rejects('Ocorreu um erro')
            } else {
                resolve(valor)
            }
        } catch(e) {
            rejects(e)
        }
    })
}

funcionarOuNao('Testando', 0.9)
    .then(v => `Valor: ${v}`)
    .then(
        v => console.log(v),
        // Podemos gerar um erro para um caso específico, criando o segundo parametro do then
        erro => console.log(`${erro}: Valor não foi recebido`) // Dessa forma fica mais fácil de identificarmos onde estão ocorrendo certos erros
        // Note que o catch não será chamado
    )
    .catch(erro => console.log(erro)) // Sempre deve ter um catch, para tratar os erros da promise
    // Sempre manter o catch no final dos then, pois depois do catch, não possuimos mais dados