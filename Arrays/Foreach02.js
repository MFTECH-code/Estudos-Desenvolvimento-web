// Minha versão do forEach
const minhaArray = [3, 4, 1, 9]

Object.defineProperty(minhaArray, 'forEach2', {
    value: function (Elemento, indice = false, array = false) {
        for (let i = 0; i < Elemento.length; i++) {
            if (indice === false && array === false) {
                console.log(Elemento[i])
            } else if (indice === true && array === false) {
                console.log(i, Elemento[i])
            } else if (array === true && indice === false) {
                console.log(Elemento[i], Elemento)
            } else if (indice === true && array === true) {
                console.log(i, Elemento[i], Elemento)
            }
        }
    }
})
minhaArray.forEach2(minhaArray, true, true)

// Versão do professor

Array.prototype.forEach3 = function (callback) {
    for (let i = 0; i < this.length; i++) {
        callback(this[i], i, this)
    }
}

minhaArray.forEach3(function (numero, indice, array) {
    console.log(indice, numero, array)
})