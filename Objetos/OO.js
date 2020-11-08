// Código não executável

// Procedural -> baseado no procedimeno, (Função)
processamento(valor1, valor2, valor3); // Uma função que manipula dados...

// OO -> Dentro da OO temos dados e dentro dos dados temos funções
objeto = {
    // Atriputos internos do objeto
    valor1,
    valor2,
    valor3,
    // Comportamentos
    processamento() {
        //...
    },
}
objeto.processamento(); // O foco passou a ser o Objeto
// A ideia da programação orientada a objeto é trazer a realidade pra dentro do software...

// Principios importantes
/* 
    1. Abstração -> Pegar um objeto do mundo real e traduzir ele para dentro de um sistema...
    EX: Carro, ele tem atributos como peso e cor, possui comportamentos como ligar, acelerar

    2. Encapsulamento -> Ter os detalhes de implementação escondidos e mostrar para o usuário uma
    interface simples para que se possa interagir com determinado objeto.
    EX: Seria como um manual de instruções do carro, que te mostra uma interface de como usar o carro
    mas não mostra como funciona cada peça do carro.

    3. Herança (prototype) -> É receber atributos e comportamentos de um objeto pai.    
    EX: O carro é um automóvel, logo ele herdou atributos e comportamentos do seu objeto pai automóvel.
    ** Priorize sempre a composição do que a herança.

    4. Polimorfismo -> Múltiplas formas. 
    EX: O carro pode ser um sedan, ou uma caminhonete. Esses seriam como subtipos.
*/