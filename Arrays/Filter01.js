// O método filter -> é uma forma de filtrar uma array
const produtos = [
    {
        nome: 'Notebook',
        preco: 2499,
        fragil: true
    },
    {
        nome: 'Ipad pro',
        preco: 4199,
        fragil: true
    },
    {
        nome: 'Copo de vidro',
        preco: 12.49,
        fragil: true
    },
    {
        nome: 'Copo de plástico',
        preco: 18.99,
        fragil: false
    }
]

console.log(produtos.filter((p) => {
    // O retorno dessa função deve ser true ou false
    // true -> retorna todos os elementos
    // false -> retorna uma array vazia
    //return p.preco > 2500 // -> apenas o Ipad retornou true, então ele vai pra array
    return p.fragil === true // -> Retorna todos os produtos frageis
}))


const caro = (p) => {
    return p.preco > 500 // Todo produto que for maior que R$500,00 e for fragil
}

const fragil = (p) => {
    return p.fragil === true // Todo produto fragil
}

console.log(produtos.filter(caro).filter(fragil))


