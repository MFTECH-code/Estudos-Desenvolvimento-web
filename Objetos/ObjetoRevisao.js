// Coleção dinâmica de pares chave/valor

const objeto = new Object; // Conseguimos criar novos objetos apartir do new
objeto.nome = 'ObjectName'; // Conseguimos acessar chaves do objeto e alterar ou criar seus valores
objeto.preco = 200;
console.log(objeto);
delete objeto.preco // Conseguimos deletar chaves de objetos usando o delete
console.log(objeto);

// Podemos ter objetos dentro de objetos
const carro = {
    modelo: 'ferrari',
    ano: 2020,
    cor: 'vermelho',
    proprietário: {
        nome: 'Raul',
        idade: 60,
        endereço: {
            país: 'Brasil',
            estado: 'SP',
            cidade: 'São Paulo',
            bairro: 'Brás',
            rua: 'Visconde de parnaíba',
            cep: '03045000'
        }
    },
    // Funções dentro de objetos
    calcular: (preco, imposto) => `R$${(preco * imposto) + preco}`
}
console.log(carro);
console.log(carro.calcular(50000, 0.15));