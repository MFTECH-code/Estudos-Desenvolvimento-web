// pessoa -> endereço de memória -> objeto
const pessoa = {
    nome: 'Fulano'
}
// Quando alteramos um atributo de um objeto não alteramos para onde a memória aponta
pessoa.nome = 'Pedro';

// Método freeze
Object.freeze(pessoa); // Quando congelamos um objeto não podemos mais alterar seus atributos...
pessoa.nome = 'Maria';
console.log(pessoa.nome); // Nome vai ser Pedro...
// Ou seja o objeto agora se torna constante...