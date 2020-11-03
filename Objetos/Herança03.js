const pai = { nome: 'Pedro', corCabelo: 'Preto' }

const filha1 = Object.create(pai); // Estamos criando um objeto filha tendo como prototipo o objeto pai
filha1.nome = 'Ana';

console.log(filha1.corCabelo);

const filha2 = Object.create(pai, {
    // Podemos já definir os atributos do objeto filha2 aqui
    nome: { value: 'Bia', writable: false, enumerable: false } // Definimos que o nome é Bia e não vai poder ser alterado nem listado
})

console.log(filha2.nome);
filha2.nome = 'Carla'; // Não podemos alterar o nome pois writable é dado com falso...
console.log(`${filha2.nome} tem um cabelo ${filha2.corCabelo}`);

console.log(Object.keys(filha1));
console.log(Object.keys(filha2)); // O atributo nome dela não pode ser listado pos enumerable é dado como falso

for (let key in filha2) {
    console.log(key); // Note que mesmo não tendo o atributo corCabelo em filha2, ele aparece pois seu objeto pai possui esse atributo
}

// Como verificar se um atributo é do objeto filho ou é do objeto pai:

for (let key in filha2) {
    filha2.hasOwnProperty(key) ? // hasOwnProperty() -> para saber se o atributo é do proprio objeto ou não
        console.log(key) : console.log(`Por Herança: ${key}`)
}