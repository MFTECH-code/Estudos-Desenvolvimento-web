console.log(this === global) // False
console.log(this === module) // False

console.log(this === module.exports) // True
console.log(this === exports) // True

function logThis() {
    console.log('Na função')
    console.log(this === exports) // False
    console.log(this === module.exports) // False
    console.log(this === global) // True

    // Ter muito cuidando quando usamos this dentro de funções, pois estaremos escrevendo no objeto global
    this.perigo = "..." // Quando colocamos o this numa variável dentro de uma função, estamos colocando dentro do escopo global
}

logThis()