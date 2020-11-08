// Na função arrow o this não varia de referenciador.

function Pessoa () {
    this.idade = 0;
    setInterval(() => {
        this.idade++;
        console.log(this.idade);
    }, 1000)
}

new Pessoa;

// Isso torna a função arrow uma função muito boa.