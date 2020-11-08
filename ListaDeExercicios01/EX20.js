/*
20) Crie um programa para informar quais e quantas notas são necessárias para entregar o mínimo de cédulas
para um determinado valor informado pelo usuário considerando notas de R$ 100, R$ 50, R$ 10 e R$ 5 e R$ 1.
Seu programa deve mostrar apenas as notas utilizadas. Por exemplo, ao solicitar R$18, o programa deve
informar apenas a seguinte informação (note que não foram exibidas informações sobre as demais cédulas): 1
nota(s) de R$ 10. 1 nota(s) de R$ 5. 3 nota(s) de R$ 1.
*/

function ValorSaque(valor) {
    let valor100 = 0;
    let valor50 = 0;
    let valor10 = 0;
    let valor5 = 0;
    let valor1 = 0;
    let valordanota = CalcularValorNota(valor);
    while (valor >= valordanota) {
        switch(valor) {
            case 100:
                valor -= 100;
                valor100++;
                break;
            case 50:
                valor -= 50;
                valor50++;
                break;
            case 10:
                valor -= 10;
                valor10++;
                break;
            case 5:
                valor -= 5;
                valor5++;
                break;
            case 1:
                valor1++;
                valor -= 1;
                break;
        }
        valordanota = CalcularValorNota(valor);
    }
    return ElaborarResultado(valor100, valor50, valor10, valor5, valor1);
}

function CalcularValorNota(valor) {
    if (valor >= 100) {
        return 100;
    } else if (valor >= 50) {
        return 50;
    } else if (valor >= 10) {
        return 10;
    } else if (valor >= 5) {
        return 5;
    } else if (valor >= 1) {
        return 1;
    }
}

function ElaborarResultado(contador100, contador50, contador10, contador5, contador1) {
    let resultado = '';

    if (contador100 > 0) {
        resultado = `${contador100}, notas de R$100,00`;
    }
    if (contador50 > 0) {
        resultado = `${contador50}, notas de R$50,00`;
    }
    if (contador10 > 0) {
        resultado = `${contador10}, notas de R$10,00`;
    }
    if (contador5 > 0) {
        resultado = `${contador5}, notas de R$5,00`;
    }
    if (contador1 > 0) {
        resultado = `${contador1}, notas de R$1,00`;
    }
    return resultado;
}

console.log(ValorSaque(153));
