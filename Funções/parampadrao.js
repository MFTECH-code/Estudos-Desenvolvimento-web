// Estrategia 1 para gerar um valor padrão.
function soma1 (a, b, c) {
    a = a || 1;
    b = b || 1;
    c = c || 1;
    // Note que usamos o operador 'ou', fizemos uma especide de condição.
    return console.log(a + b + c);
}
// Estratégias 2, 3 e 4 para gerar valores padrões:
function soma2 (a, b, c) {
    a = a !== undefined ? a : 1; // Usando operação ternária
    b = 1 in arguments ? b : 1; // Usando arguments com operação ternária 
    c = isNaN(c) ? 1 : c; // Usando a função isNaN com operação ternária
    // De todas essas a mais adequada para este caso é o C.
    return console.log(a + b + c);
}
// ES15
// No Ecma script 15 tivemos uma atualização para os parâmetros, assim facilitando na hora de criar parâmetros padrões
function soma3 (a = 1, b = 1, c = 1) {
    return console.log(a + b + c);
    // Sendo essa a versão que mais usaremos... 
}

soma1(); // Nesse caso não podemos escolher 0 como parametro pois 0 retorna falso, logo ele irá usar o parametro padrão.
soma2(0, 0, 0); 
soma3();


