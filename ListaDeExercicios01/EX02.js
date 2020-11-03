/* 
02) Os triângulos podem ser classificados em 3 tipos quanto ao tamanho de seus lados:
Equilátero: Os três lados são iguais. Isósceles: Dois lados iguais. Escaleno: Todos os lados são diferentes.
Crie uma função que recebe os comprimentos dos três lados de um triângulo e retorne sua classificação quanto
ao tamanho de seus lados. (Neste exemplo deve-se abstrair as condições matemáticas de existência de um
triângulo).
*/

function ClassificadorTriangulos(lado1, lado2, lado3) {
    let sub = lado2 - lado3;
    if (sub < 0) { // Tranformando em positivo porque não existe lado negativo...
        sub = sub * -1;
    }
    if (lado1 > (sub) && lado1 < (lado2 + lado3)) {
        console.log('O triângulo existe!');

        if (lado1 == lado2 && lado2 == lado3 && lado1 == lado3) {
            console.log('Sua classificação é Equilátero.');
        }
        else if (lado1 == lado3 || lado2 == lado3)  {
            console.log('Sua classificação é Isóceles.');
        } else {
            console.log('Sua classificação é Escaleno.');
        } 
    } else {
        console.log('O triângulo não existe...')
    }
    
}

function CriadorDeTriangulos(lado1, lado2, lado3) {
    return {
        a: lado1,
        b: lado2,
        c: lado3,
        ClassificadorTriangulos
    }
}
const t1 = CriadorDeTriangulos(2, 2, 2);
ClassificadorTriangulos.call(t1, t1.a, t1.b, t1.c);


