// Minha resolução
const carrinho = [
    '{ "nome": "Borracha", "preco": 3.45 }',
    '{ "nome": "Caderno", "preco": 13.90 }',
    '{ "nome": "Kit de Lápis", "preco": 41.22 }',
    '{ "nome": "Caneta", "preco": 7.50 }'
]

// Retornar uma array apenas com os preços

let carrinhoObjetos = carrinho.map(function (e) {
    return JSON.parse(e)
})

const pegaPreco = e => `R$${parseFloat(e.preco).toFixed(2).replace('.', ',')}`
let caixa = carrinhoObjetos.map(pegaPreco)
console.log(caixa)

// Resolução do professor
const paraObjeto = json => JSON.parse(json)
const apenasPreco = produto => produto.preco

const resultado = carrinho.map(paraObjeto).map(apenasPreco)
console.log(resultado)