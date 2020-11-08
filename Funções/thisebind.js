// O this serve para referenciar.
const pessoa = {
    saudacao: 'Bom Dia',
    falar() {
        console.log(this.saudacao); // Aqui usamos o this para referenciar o objeto que estamos.
    }
}

pessoa.falar(); // Ele irá falar a saudação

falar = pessoa.falar;
falar(); // Note que houve um conflito, o this não referencia mais o objeto

// Para conflitos como este usamos o bind()
// O bind simplesteme fala a quem o this deve referenciar...
FalarPessoa = pessoa.falar.bind(pessoa);
FalarPessoa();