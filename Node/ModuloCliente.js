// Importando os módulos A e B
// Estamos usando o método comons JS de exportação
const moduloA = require('./ModuloA')
const moduloB = require('./ModuloB')
// Usamos require para importar módulos.
// Se o módulo for um arquivo dentro do seu projeto usamos o caminho relativo
// Exportamos o objeto ModuloApara a constante moduloA e a mesma coisa na constante moduloB
// Se o arquivo for .js não precisamos colocar a extensão .js no path do módulo

console.log(moduloA.bemVindo)
console.log(moduloA.ateLogo)
console.log(moduloB.bomDia)
console.log(moduloB.boaNoite())

console.log(moduloA) // Note que o retorno é um objeto
console.log(moduloB)

