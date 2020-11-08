/*
    Podemos armazenar funções em uma variável...
*/
// Poucas linguagens conseguem fazer isso...
const ImprimirSoma = function (a, b){
    console.log(a + b);
}

// Armazenando Função Arrow em uma variável...
const Soma = (a, b) => a + b; // Com a função arrow conseguimos economizar linhas...
console.log(Soma(2, 3));
// Caso a função execute mais de uma sentença torna - se necessario o uso do corpo...
const Sub = (a, b) => {
    return a - b;
}
console.log(Sub(3, 1));


