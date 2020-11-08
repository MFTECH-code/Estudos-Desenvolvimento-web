// Funções usando destructuring com arrays

function rand([min = 0, max = 1000]){
    if (min > max) [min, max] = [max, min]; // Se minimo for maior que o maximo, minimo se torna maximo
    const valor = Math.random() * (max - min) + min;
    return Math.floor(valor);
}

// Note que agora nós só precisamos colocar os números e n colocamos os nomes das variaveis
console.log(rand([50, 10]));
