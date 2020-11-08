console.log(module.exports === this) // True
console.log(module.exports === exports) // True

// Usando essas três formas faz com que sejam vistas fora do arquivo
this.a = 1
exports.b = 2
module.exports.c = 3

exports = null
console.log(module.exports)
// Mesmo botando exports como nullo b ainda existe, isso porque exports é uma outra variável
// Por isso quando criamos um objeto de exportação não podemos usar o exports ou o this, porque quem sempre é retornado
// é o module.exports

module.exports = {
    publico: true
}

// Sempre que quisermos atribuir um objeto a ser exportado, obrigatóriamente usamos module.exports