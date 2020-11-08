const sequencia = {
    _valor: 1, // Convenção para dizer que o atributo é privado
    get valor() { return this._valor++ }, // Usamos o get para poder usar valores internos em funções
    // Note que usamos nomes iguais em métodos distintos, mas por se tratar desse exemplo
    // o JS percebe que se trata de dois métodos distintios um do outro.
    set valor(valor) {
        if (valor > this._valor) {
            this._valor = valor;
        }
    },
};

console.log(sequencia.valor, sequencia.valor);