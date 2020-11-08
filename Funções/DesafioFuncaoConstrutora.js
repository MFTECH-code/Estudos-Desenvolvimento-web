// Função construtora
// Funciona da mesma forma que uma classe...
function Pessoa(nome, idade){
    // Método Público
    this.falar = () => console.log(`Olá, meu nome é ${nome} e tenho ${idade} anos.`);
}

const Marcos = new Pessoa('Marcos', 15);
Marcos.falar();