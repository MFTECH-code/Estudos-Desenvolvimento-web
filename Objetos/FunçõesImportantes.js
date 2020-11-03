const Pessoa = {
    nome: 'Matheus',
    idade: 20,
    peso: 110
}

console.log(Object.keys(Pessoa)); // Ele vai pegar todas as chaves e colocar elas em uma array
console.log(Object.values(Pessoa)); // Ele vai pegar todos os valores e colocar eles em uma array
console.log(Object.entries(Pessoa)); // Ele vai colocar cada par chave/valor em sub arrays dentro de uma array
Object.defineProperty(Pessoa, 'DataDeNascimento', {
    enumerable: true, // Pode ser listada
    writable: false, // Não pode ser modificada *Seria como dar um freeze em somente um atributo do objeto
    value: '28/11/2000'
});
Pessoa.DataDeNascimento = '27/11/2001';
console.log(Pessoa.DataDeNascimento); // 28/11/2000

const dest = { a: 1 };
const o1 = { b: 2 };
const o2 = { c: 3, a: 4 };
const obj = Object.assign(dest, o1, o2); // Concatenando objetos (ES6)
console.log(obj);
Object.freeze(obj); // Transformando todos os atributos e valores constantes dentro do objeto
obj.c = 123;
console.log(obj);