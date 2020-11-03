// O destructuring é um recurso adicionado na versão 2015 do JS
// Ele é usado para descompactar estruturas como arrays e objetos...

const pessoa = {
    nome: 'Matheus',
    idade: 19,
    peso: 90,
    endereco: {
        rua: 'Visconde de parnaíba',
        numero: 655
    }
}

// O operador de destructuring é representado por { } quando se trata de objetos

const { nome, idade } = pessoa;
console.log(nome, idade);
// Dentro das chaves são os atributos que você quer tirar
// Depois do sinal de atribuição é o objeto que queremos tirar as informações

const { endereco: { rua, numero}, peso } = pessoa;
console.log(rua, numero, peso);

// Se caso uma variável não existir dentro do objeto ja podemos dar um valor padrão pra ela...
const { trabalho = 'Não informado'} = pessoa;
console.log(trabalho);
// Caso não criarmos um valor padrão o resultado será undefined...