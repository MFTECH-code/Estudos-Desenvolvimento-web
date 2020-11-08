// Closure é o escopo criado quando uma função é declarada
// Esse escopo permite que a função acesse e manipule variáveis externas à função

// Contexto Léxico em ação!

const x = 'Global';

function fora() {
    const x = 'Local';
    function dentro() {
        return x;
    }
    return dentro();
}

console.log(fora());