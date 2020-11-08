const contadorA = require('./instanciaUnica')
const contadorB = require('./instanciaUnica')

// Como instanciaNova retorna uma função devemos chamá-la
const contadorC = require('./instanciaNova')()
const contadorD = require('./instanciaNova')()

contadorA.inc()
contadorA.inc()
console.log(contadorB.valor)
// Note que quando usamos o método inc do contadorA, o valor do contadorB aumentou, mesmo sendo variaveis diferentes
// Isso ocorre porque o node por padrão faz cache dos objetos retornados apartir de um require

contadorC.inc()
contadorC.inc()
console.log(contadorD.valor)
// Como usamos função factory, conseguimos driblar esse cache que o node faz. Dessa forma apenas contadorC incrementou
