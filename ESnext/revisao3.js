// ES8 -> Object.values/Object.entries

const obj = {
    a: 1,
    b: 2,
    c: 3
}
console.log(Object.values(obj)) // Retorna uma array com todos os valores
console.log(Object.entries(obj)) // Retorna uma matriz com par chave e valor

// Melhorias na notação literal

const nome = 'carla'
const pessoa = {
    nome, // Como já existe a constante nome, não precisamos atribuir valor ao nome
    ola () { // Não precisamos atribuir a palavra function
        return 'Oi rapaziada'
    }
}
console.log(pessoa.nome, pessoa.ola())

// Class

class Animal {} // a class retorna uma função em JS
class Cachorro extends Animal { // Forma de estabelecer henrança entre classes
    falar() {
        return 'AUAUAUAUAU'
    }
} 

console.log(new Cachorro().falar())