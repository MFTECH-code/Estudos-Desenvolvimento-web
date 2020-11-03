// Se usarmos o let como variavel, teremos um problema que apenas dentro do bloco do for será visivel a nossa variavel

for (let i = 0; i < 10; i++){
    console.log(i); // a nossa variavel só funciona dentro do bloco do for...
}

console.log(i); // Is not defined...