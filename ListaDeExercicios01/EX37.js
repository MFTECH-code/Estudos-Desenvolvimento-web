/*
37) Escreva duas funções, uma para progressão aritmética e uma para progressão geométrica que recebam
como parâmetros um número n (número de termo), a1 (o primeiro termo) e r (a razão) e escreva os n termos ,
bem como a soma dos elementos.
*/

function PA(termos, a1, razao) {
    console.log(a1);
    for (let i = 0; i < termos - 1; i++) {
        console.log(a1 += razao);
    }
}

PA(10, 2, 2);
PA(10, 5, 5);   