// Minha versão e do ibankow do Map
const lista = [1, 2, 3, 4, 5]

Array.prototype.map2 = function (callback) {
    const novaLista = []
    for (let i = 0; i < this.length; i++) {
        novaLista.push(callback(this[i], i, this))
    }
    return novaLista
}

const novaLista = lista.map2(function (elemento) {
    return elemento * 2
})

console.log(novaLista)

// Resolução do professor

Array.prototype.map3 = function (callback) {
    const novaArray = []
    for (let i = 0; i < this.length; i++) {
        novaArray.push(callback(this[i], i, this))
    }
    return novaArray
}

const triploLista = lista.map3(function (elemento) {
    return elemento * 3
})
console.log(triploLista)