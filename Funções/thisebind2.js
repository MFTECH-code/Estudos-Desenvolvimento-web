function Pessoa() {
    this.idade = 0;
    const self = this;
    setInterval(function () {
        self.idade++;
        console.log(self.idade); // Note que pelo fato do this não estar sendo executado no mesmo bloco que a função pessoa, ele não referencia á função...
    }/*.bind(this)*/, 1000) // Mas quando colocamos um .bind(this) dps da função sendo chamada no intervalo, pelo fato de estar no mesmo bloco, ele vai referenciar á função...
}

new Pessoa;

// Temo como usar uma tática sem ter que usar o bind que é apenas atribuir self ao this...