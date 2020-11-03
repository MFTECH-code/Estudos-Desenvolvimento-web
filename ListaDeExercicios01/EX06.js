/*
06) Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros e tempo de aplicação. A
primeira função retornará o montante da aplicação financeira sob o regime de juros simples e a segunda
retornará o valor da aplicação sob o regime de juros compostos.
*/

function JurosSimples(Capital, Taxa, Tempo) {
    return `Montante Simples: R$${(Capital * Taxa * Tempo + (Capital)).toFixed(2).toString().replace('.', ',')}`;
}

function JurosComposto(Capital, Taxa, Tempo) {
    return `Montante Composto: R$${(Capital * (1 + Taxa) ** Tempo).toFixed(2).toString().replace('.', ',')}`;
}

console.log(JurosSimples(1000, 0.15, 6));
console.log(JurosComposto(1000, 0.15, 6));

