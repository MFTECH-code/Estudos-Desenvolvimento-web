// Promise -> uma promessa, que pode ou não pode acontecer

// Promises são funções retornadas "Futuramente", de forma assíncrona podendo ser aceitas(resolve) ou rejeitadas (reject)

function falarDepoisDe(tempo, frase) {
    return new Promise((resolve, reject) => {
        // O parâmetro resolve, é uma função que será chamada quando a promessa for atendida
        // O parâmetro reject, é uma função que irá rejeitar o cumprimento da promessa por algum tipo de erro
        setTimeout(() => {
            resolve(frase) // Resolve aceita apenas 1 parâmetro
        }, tempo * 1000)

    })
}

falarDepoisDe(4, 'Oi')
    //  Quando resolvemos a promise, temos a função then que será executada quando a promise for resolvida
    .then(frase => frase.concat('?!?'))
    .then(outraFrase => console.log(outraFrase))
    // Podemos encadear várias operações com o then
    // Caso nossa promise não seja resolvida devemos tratar o erro com catch
    .catch(e => console.log('Erro'))