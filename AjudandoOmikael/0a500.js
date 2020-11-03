/*
Baseado nos conteúdos em vídeo construir uma classe e dois objetos do tipo carro.
Essa classe deve ter ao menos dois métodos e quatro parâmetros.

Para entregar: enviar o/os arquivo/os .js
*/

class carro {
    constructor(velMax, potencia, modelo, eletrico = false) {
        this.velMax = velMax
        this.potencia = potencia
        this.modelo = modelo
        this.eletrico = eletrico
        this.velAtual = 0
    }
    ligar() {
        console.log('Ligando o carro... Vrum Vrum')
    }
    acelerar() {
        this.velAtual += this.potencia
        if (this.velAtual > this.velMax) {
            this.velAtual = this.velMax
        }
        console.log(`Acelerando: velAtual: ${this.velAtual}Km/h`)
    }
}

const hb20 = new carro(200, 5, 'sedan')
hb20.ligar()
for (let i = 0; i < 50; i++) {
    hb20.acelerar()
}
console.log(hb20)

