/*
38) Escreva uma função que receba dois parâmetros início e fim. Essa função deve imprimir todos os números
ímpares que estão entre esses valores. Por padrão os valores devem ser 0 para início e 100 para fim. Atente
para corrigir a ordem dos parâmetros caso a função receba o valor maior antes do menor.
*/


function ContandoImpares(inicio = 0, fim = 100) {
    if (inicio > fim) {
        let NovoInicio = fim;
        let NovoFim = inicio;
        for (NovoInicio; NovoInicio < NovoFim; NovoInicio++) {
            if (NovoInicio % 2 != 0) {
                console.log(NovoInicio);
            }
        }
    } else {
        for (inicio; inicio < fim; inicio++) {
            if (inicio % 2 != 0) {
                console.log(inicio);
            }
        }
    }
}

ContandoImpares(20, 10);
