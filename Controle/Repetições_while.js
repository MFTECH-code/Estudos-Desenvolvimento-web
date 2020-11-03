/*
    while -> Ele é muito usado quando não temos uma quantidade determinada repetições...
*/

// Função que gera um número aleatorio
function GetNumber(min, max) {
    const valor = Math.random() * (max - min) + min;
    return Math.floor(valor);
}

// Quando o número aleatorio for maior ou igual a 25 o programa deve parar

while (true) { // Quando colocamos while true significa um looping infinito
    let alet = GetNumber(0, 50);
    if (alet >= 25) {
        console.log(alet);
        break;
    }
    else {
        console.log(alet);
    }
}


// O while possui uma variante chamada 'do/while'... Ela é muito pouco usada...

do { // Faça isso
    let alet = GetNumber(0, 50);
    if (alet >= 25) {
        console.log(alet);
        break;
    }
    else {
        console.log(alet);
    }
} while (true) // Enquanto for verdade...
