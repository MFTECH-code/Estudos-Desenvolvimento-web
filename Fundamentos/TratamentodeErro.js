/*
    O tratamento de erro no JS funciona com 3 palavras chaves: Try, Catch e Throw...
*/
function tratando(erro){
    throw new Error('Falha...')
}


function nomemais(obj){
    try {
    mais = obj.nome.toUpperCase() + '!!!!';
    return console.log(mais);
    }
    catch (e) {
        tratando(e);
    }
    finally{
        console.log('Programa finalizado com sucesso...')
    }
}

const pessoa = {
    nome: 'Matheus',
    idade: 19
}
nomemais(pessoa);