// Object.preventExtensions -> Impede que seja atribuido mais atributos
const produto = Object.preventExtensions({
    id: '10g5ws6',
    nome: 'Qualquer',
    preco: 20
});
// Object.isExtensible() -> Retorna true/false, mostra se um objeto é extensivel ou não
console.log(`Extensivel: ${Object.isExtensible(produto)}`); // -> False pois nosso objeto não é mais extensivel

produto.nome = 'Pack-Marmitas'; // Podemos alterar os dados pois esse atributo e o objeto não estão congelados
produto.descricao = 'Várias marmitex'; // Como nosso objeto não é extensivel, esse atributo não será atribuido
delete produto.id; // Mas ainda podemos deletar atributos do nosso objeto
console.log(produto);

// Object.seal -> Não podemos adicionar e excluir atributos de um objeto, mas podemos modificar seus valores
const pessoa = { nome: 'Juliana', idade: 18 };
Object.seal(pessoa);
// Object.isSealed -> Retorna true/false, mostra se um objeto está selado ou não
console.log(`Selado: ${Object.isSealed(pessoa)}`);

pessoa.sobrenome = 'Torres'; // Não podemos adicionar atributos
delete pessoa.nome; // Não podemos deletar atributos
pessoa.idade = 20; // Podemos alterar atributos
console.log(pessoa);

// Object.freeze -> Não podemos adicionar, nem exluir e nem alterar valores de um objeto
const pessoa2 = { nome: 'Marcos', idade: 18 };
Object.seal(pessoa);

pessoa.sobrenome = 'Torres'; // Não podemos adicionar atributos
delete pessoa.nome; // Não podemos deletar atributos
pessoa.idade = 20; // Não podemos alterar atributos
console.log(pessoa2);