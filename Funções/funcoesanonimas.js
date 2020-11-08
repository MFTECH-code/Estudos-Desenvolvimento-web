// Em javascript utilizamos bastante as funções anônimas...

const soma = function (x, y) {
    return x + y;
}

const ImprimirResultado = function (a, b, operacao = soma) {
    console.log(operacao(a, b));
}

ImprimirResultado(5, 2);
// Conseuimos utilizar funções dentro de funções utilizando funções anônimas...
ImprimirResultado(4, 2, function (x, y) {
    return x - y;
})
// Arrow functions são funções anônimas
ImprimirResultado(3, 4, (x, y) => x * y);

// Funções dentro de objetos também são funções anônimas...

const carro = {
    ligar: function () {
        console.log('Vrumm...Vrumm...');
    },
    desligar: () => console.log('Carro desligado'),
}

carro.ligar();
carro.desligar();