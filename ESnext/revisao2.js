// Arrow function -> ES6
const soma = (a, b) => a + b
console.log(soma(2, 3))
// Funções arrow são funções anônimas atribuidas a variaveis ou constantes

// Arrow function (this)
const lexico1 = () => console.log(this === exports)
const lexico2 = lexico1.bind({})
lexico1()
lexico2()

// Parametros default
function log(texto = "Node") {
    console.log(texto)
} 
log()

// Operador rest
function total(...numeros) {
    let total = 0
    numeros.forEach(n => total += n)
    return total
}
console.log(total(1, 2, 3, 4, 5))