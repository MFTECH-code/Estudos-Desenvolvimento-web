// Acessando atributos do Objeto Pai
const ferrari = {
    modelo: 'F40',
    velMax: 324
}

const volvo = {
    modelo: 'F40',
    velMax: 200
}

console.log(ferrari.__proto__); // A partir do __proto__ consigo acessar o objeto pai do objeto ferrari
// Se eu precisar de um atributo que não tenho no objeto filho, eu posso procurar no objeto pai usando essa sintaxe

console.log(ferrari.__proto__ === Object.prototype); // true

console.log(Object.prototype.__proto__); // O objeto pai não tem um pai, ou seja, ngm superior a ele
// O objeto não possui o prototype
console.log(ferrari.prototype);

// Toda função tem um prototype

function MeuObjeto() {}
console.log(MeuObjeto.prototype);