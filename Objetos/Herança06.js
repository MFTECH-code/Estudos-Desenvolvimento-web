function Aula(nome, videoID) {
    this.nome = nome;
    this.videoID = videoID;
}

const aula1 = new Aula('Bem Vindo', 123);
const aula2 = new Aula('Até breve', 456);

console.log(aula1, aula2);

// Simulando o operador new

function novo(f, ...params) {
    const obj = {}; // Criamos o objeto novo
    obj.__proto__ = f.prototype; // Associamos o prototipo do objeto novo ao da função construtora
    f.apply(obj, params)  // Nós iremos chamar a função construtora e chamar uma função apply dentro dela,
    // A função apply recebe 2 parâmetros: obj -> this, params -> será uma array com a lista de parâmetros que eu quero aplicar
    return obj; // Retornamos o objeto criado
}

const aula3 = novo(Aula, 'Bem vindo de volta', 789);
console.log(aula3);

