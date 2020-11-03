// let e const -> ES6
// O let tem escopo de bloco enquanto o var tem escopo global
{
    var a = 1
    let b = 2
    console.log(b) // -> Somente no bloco
}
console.log(a) // -> Funciona normal pois var tem escopo global
// console.log(b) -> resulta em um erro, pois não existe a variavel b no escopo onde estamos

// Template String -> ES6
const produto = 'iPad'
console.log(`${produto} é 
caro`)
// Com template string podemos fazer quebra de linha sem utilizar \n

// Destructuring -> Tirar de dentro de uma estrutura

// Desestruturar strings
const [l, e, ...tras] = "Cod3r"
console.log(l, e, tras)
// Desestruturar arrays
const [x, y] = [1, 2]
console.log(x, y)
// Desestruturar objetos
const { nome, idade } = { nome: 'Matheus', idade: 19 }
console.log(nome, idade)