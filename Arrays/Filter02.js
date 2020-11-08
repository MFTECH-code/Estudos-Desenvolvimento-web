// Meu filter

Array.prototype.filter2 = function(callback) {
    const novaArray = []
    for (let i = 0; i < this.length; i++) {
        let valor = callback(this[i], i, this)
        if (valor === true) {
            novaArray.push(this[i])
        }
    }
    return novaArray
}

const number = [1, 2, 3, 4, 5, 6]
console.log(number.filter2((p) => p > 2))

// Versão do professor

Array.prototype.filter3 = function(callback) {
    const newArray = []
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i], i, this)) {
            newArray.push(this[i])
        }
    }
    return newArray
}
console.log(number.filter3((p) => p > 2))