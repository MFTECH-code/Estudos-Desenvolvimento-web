// A função além de carregar consigo parâmetros, ela tabem carrega o local onde ela foi definida

const valor = 'Global';

function MinhaFuncao() {
    console.log(valor);
}

function exec() {
    const valor = 'Local';
    function MinhaFuncaoLocal() {
        console.log(valor);
    }
    MinhaFuncaoLocal(); // Aqui ela irá retornar o valor LOCAL pois essa função foi feita dentro da func exec
    MinhaFuncao(); // Como essa função foi criada fora da função exec() ela retorna global
}

exec();