// Programação síncrona
let a = 1 // Você ja tem o resultado
console.log(a)

// Promise é uma promessa, algo que você vai resolver no futuro
console.log(typeof Promise) // A promise é uma função
// Quando criamos uma promise o retorno é um objeto
// Precisamos passar uma função como parâmetro para a nova promise e esse parametro tbm será uma função
let p = new Promise(function(resolve) {
    resolve({
        x: 3,
        y: 4
    }) // A promessa só pode receber um único valor
})

console.log(typeof p) // p é um objeto

// Para acessarmos o valor de p precisamos usar o método then
p // Passamos uma função no parâmetro do método, para pegar o valor que passamos na promise
    .then(valX) // Pegando somente o valor do atributo x
    // Podemos usar vários then encadeados
    .then(console.log) // Mostrando o valor, note que agora o valor mostrado não é o objeto e sim apenas o valor que pedimos no then anterior
    // Note que não precisamos passar a função para mostrar o valor, apenas passamos o console.log

    // O then funciona de forma encadeada, o valor de um then é passado para o próximo then como parâmetro, e assim sucessivamente
    
// Podemos refatorar em funções separadas em vez de colocar funções anônimas
function valX(objeto) { // Dessa forma o código fica mais legivel
    return objeto.x
}