/*
19) O cardápio de uma lanchonete é o seguinte:
Código Descrição do Produto Preço
100 Cachorro Quente R$ 3,00
200 Hambúrguer Simples R$ 4,00
300 Cheeseburguer R$ 5,50
400 Bauru R$ 7,50
500 Refrigerante R$ 3,50
600 Suco R$ 2,80
Implemente uma função que receba como parâmetros o código do item pedido, a quantidade e calcule o valor
a ser pago por aquele lanche. Considere que a cada execução somente será calculado um item. Use o
comando switch. Crie um caso default para produto não existente.
*/

function ContaRestaurante(codigo, quantidade) {
    switch(codigo) {
        case 100:
            return 'R$' + (3 * quantidade).toFixed(2);
        case 200:
            return 'R$' + (4 * quantidade).toFixed(2);
        case 300:
            return 'R$' + ((5.5 * quantidade).toFixed(2));
        case 400:
            return 'R$' + ((7.5 * quantidade).toFixed(2));
        case 500:
            return 'R$' + ((3.5 * quantidade).toFixed(2));
        case 600:
            return 'R$' + ((2.8 * quantidade).toFixed(2));
        default:
            return 'Produto não existente...';
    }
}

console.log(ContaRestaurante(100, 5));
console.log(ContaRestaurante(200, 5));
console.log(ContaRestaurante(300, 5));
console.log(ContaRestaurante(400, 5));
console.log(ContaRestaurante(500, 5));
console.log(ContaRestaurante(600, 5));
console.log(ContaRestaurante(700, 5));
