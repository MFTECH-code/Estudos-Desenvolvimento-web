// Transformando um objeto em Array

const quaseArray = {
    0: 'Ana',
    1: 'Maria',
    2: 'Paulo'
}
console.log(quaseArray)
Object.defineProperty(quaseArray, 'toString', { // Criando método toString
    value: function () {
        return Object.values(this)
    },
    enumerable: false
})

console.log(quaseArray[0])
console.log(quaseArray.toString())