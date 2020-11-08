// Call -> passamos os parâmetros normalmente
// Apply -> Passamos os parâmetros em uma array

function getPreco (Imposto = 0, moeda = 'R$') {
    return `${moeda} ${this.preco * (1 - this.desc) * (1 + Imposto)}`;
}

const produto = {
    nome: 'Celular',
    preco: 1597,
    desc: 0.15,
    getPreco
}

console.log(getPreco());
console.log(produto.getPreco());

const carro = { preco: 49599, desc: 0.20 }
console.log(getPreco.call(carro, 0.17, '$'));
console.log(getPreco.apply(carro, [0.17, '$']));