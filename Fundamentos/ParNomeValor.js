// par nome/valor
const saudacao = 'Olá'; // Contexto 1

function execute() {
    const diga = 'Oi'; // Contexto 2
    return diga
}

execute();

// Objetos são grupos aninhados de pares nome/valor

const pessoa = {
    Nome: 'Matheus',
    Idade: 19,
    peso: 90,
    endereco: {
        Rua: 'Visconde de Parnaíba',
        Numero: 655
    }
}

console.log(saudacao);
console.log(pessoa);