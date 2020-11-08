// Factory é uma função que sempre no final retorna um objeto
// Em vez de ficar criando vários objetos podemos fazer uma função que cria objetos

function CriarPessoa() {
    // Usando valores fixos
    return {
        nome: 'Matheus',
        sobrenome: 'Feitosa'
    }
}

console.log(CriarPessoa());

// Factory 02
function CriarProduto(nome, preco){
    // Usando parâmetros
    return {
        nome: nome,
        preço: preco
    }
}

const milho = CriarProduto('Milho', 15);
console.log(milho);
milho.preço = 8;    
console.log(milho);

