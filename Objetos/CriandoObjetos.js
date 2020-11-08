// Forma literal
const obj1 = {};

// Object em JS
const obj2 = new Object;

// Funções construtoras
function pessoa(nome, idade, altura, peso) {
    this.nome = nome; // com esse this estou deixando essa variável pública, ou seja, ela não esta sendo encapsulada
    this.idade = idade; 
    this.AnodeNascimento = (idade) => 2020 - idade;
}

const pessoa1 = new pessoa('Matheus', 20, 1.77, 102);
console.log(pessoa1);

// Função Factory (Padrão de projeto)
function CriarFuncionario(nome, idade, salario) {
    return {
        nome,
        idade,
        salario,
        getAumento: (salario) => (salario * 0.1) + salario
    }
}
const f1 = CriarFuncionario('Mario', 32, 3500);
console.log(f1);
console.log(f1.getAumento(3500));

// Object.create
const filha = Object.create(null);
filha.nome = 'Maria';
console.log(filha);

// Transformando um JSON em objeto
const FromJson = JSON.parse('{"info": "Sou um JSON"}'); // Ele converteu o JSON em um objeto
console.log(FromJson);