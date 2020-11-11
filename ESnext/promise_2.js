
// setTimeout(function() {
//     console.log('Executando callBack')

//     setTimeout(function() {
//         console.log('Executando segunda callBack')

//         setTimeout(function() {
//             console.log('Executando terceira callback')
//         }, 2000)
//     }, 2000)
// }, 2000)

// Callback hell -> Quando usamos muitas callBacks uma dentro da outra, acabamos entrando no inferno das callBacks

// Usando promises não precisamos passar por esta situação
function esperarPor(tempo = 2000) {
    return new Promise(function(resolve) {
        setTimeout(function() {
            console.log('Executando promise...')
            resolve()
        }, tempo)
    })
}

esperarPor(3000)
    .then(() => esperarPor(3000))
    .then(esperarPor)
    .then(esperarPor)

// Fizemos a mesma funcionalidade anterior, só que sem o callBack hell