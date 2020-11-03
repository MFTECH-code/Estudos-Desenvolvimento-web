function MeuObjeto() {}
console.log(MeuObjeto.prototype); // o prototype de MeuObjeto() aponta para um objeto


const obj1 = new MeuObjeto
const obj2 = new MeuObjeto
console.log(obj1.__proto__ === obj2.__proto__); // obj1 e obj2 tem como pai o mesmo objeto
// Quando criamos um objeto por meio de uma função construtora o proto do objeto ira apontar para função.prototype
console.log(obj1.__proto__ === MeuObjeto.prototype); // Aqui podemos ver que o protótipo de obj1 aponta para MeuObjeto.prototype


MeuObjeto.prototype.nome = 'Matheus';
MeuObjeto.prototype.falar = function() {
    console.log(`Olá, meu nome é ${this.nome}`);
}
// Como criamos atributos no MeuObjeto.prototype, todos meus objetos criados terão acesso á esses atributos
// Curiosidade: Note que MeuObjeto agora virou uma classe, e não se trata mais de uma função construtora

obj2.falar();
obj2.nome = 'Maria';
obj2.falar();

const obj3 = {};
obj3.__proto__ = MeuObjeto.prototype; // Podemos definir a herança dessa forma também
obj3.falar();

// Resumindo a loucura de protótipos
console.log((new MeuObjeto).__proto__ === MeuObjeto.prototype); // -> True
console.log(MeuObjeto.__proto__ === Function.prototype); // -> True
console.log(Function.prototype.__proto__ === Object.prototype); // -> True
console.log(Object.prototype.__proto__ === null); // -> True (Maior da hierarquia)


