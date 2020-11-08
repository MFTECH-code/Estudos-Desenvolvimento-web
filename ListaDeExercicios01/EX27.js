/*
27) Construa uma função que receba como parâmetros as alturas e as taxas de crescimento anuais de duas
crianças e calcule se existe uma criança menor, caso exista se a criança menor ultrapassará a maior e em
quantos anos isso acontecerá. Utilize centímetros para as unidades de medida.
*/

function CalcularCrescimento(altura1, taxa1, altura2, taxa2) {
    if (altura1 == altura2) {
        if (taxa1 > taxa2) {
            return 'A criança1 ultrapassará a criança2 em 1 ano';
        } else if (taxa1 < taxa2) {
            return 'A criança2 ultrapassará a criança1 em 1 ano';
        }
    } else {
        if (altura1 > altura2) {
            if (taxa1 >= taxa2) {
                return 'A criança menor nunca ultrapassará a maior';
            } else {
                return CalcularTempo(altura2, taxa2, altura1, taxa1);
            }
        } else {
            if (taxa2 >= taxa1) {
                return 'A criança menor nunca ultrapassará a maior';
            } else {
                return CalcularTempo(altura1, taxa1, altura2, taxa2);
            }
        }
    }
}

function CalcularTempo(AlturaMenor, TaxaMenor, AlturaMaior, TaxaMaior) {
    let qtdAnos = 0;
    while (AlturaMenor < AlturaMaior) {
        AlturaMenor += TaxaMenor;
        AlturaMaior += TaxaMaior;
        qtdAnos++;
    }
    return `A criança menor ultrapassará a maior em ${qtdAnos}`
}

console.log(CalcularCrescimento(150, 2, 130, 4));