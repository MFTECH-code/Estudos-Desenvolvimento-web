// Cadeia de protótipos (Prototype Chain)
Object.prototype.attr4 = 'D'; // Maior na hierarquia NÃO FAÇA ISSO EM PROJETOS
const avo = { attr: 'A' } 
const pai = { __proto__: avo, attr2: 'B' } // Para criar uma herança precisamos fazer __proto__: objeto pai
const filho = { __proto__: pai, attr3: 'C', attr2: 'E' }

console.log(filho.attr); // Mesmo o filho não tendo attr, ele vai buscar até o objeto mais superior q nesse caso seria o avo
console.log(avo.attr4); // Como o avo aponta para Object.prototype, Object.prototype se torna o maior na hierarquia...
console.log(filho.attr4);
console.log(filho.attr2); // Como o filho tem um attr2 proprio, ele vai escolher o attr2 do objeto filho e não o do pai

const carro = {
    velAtual: 0,
    velMax: 200,
    acelerarMais(delta) {
        if (this.velAtual <= this.velMax) {
            this.velAtual += delta;
        } else {
            this.velAtual = this.velMax;
        }
    },
    status() {
        return `${this.velAtual}Km/h de ${this.velMax}Km/h`;
    }
}

const ferrari = {
    modelo: 'F40',
    velMax: 324 // Shadowing -> Essa variável irá 'sombrear' a variável do objeto pai.
}

const volvo = {
    modelo: 'V40',
    status() {
        return `${this.modelo}: ${super.status()}`; // super é uma forma de usar atributos ou métodos do prototipo desse objeto
    }
}

// Outra forma de criar herança, ou relação de protótipo

Object.setPrototypeOf(ferrari, carro);
Object.setPrototypeOf(volvo, carro);

console.log(ferrari); // Note que ele só irá mostrar os atributos do objeto ferrari
console.log(volvo); // O mesmo ocorre com o volvo
// Isso não nos impede de usar as funçoes do objeto pai
ferrari.acelerarMais(100);
console.log(ferrari.status());

volvo.acelerarMais(100);
console.log(volvo.status()); // Note que estamos usando a função status do objeto volvo




