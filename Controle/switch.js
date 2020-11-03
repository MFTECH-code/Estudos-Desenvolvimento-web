// Além do else if temos o switch que tem a mesma finalidade, e é o melhor jeito

// O switch diferentemente do else if não retorna true or false
function SuaNota(nota) {
    switch(nota) {
        case 10: case 9:
            console.log('Nota muito boa!');
            break; // Como o switch executa todos os casos mesmo que um seja verdadeiro temos que parar ele com break
        case 8: case 7: case 6:
            console.log('Nota boa!');
            break;
        case 5: case 4: case 3: case 2: case 1: case 0:
            console.log('Péssima nota...');
            break;
        default:
            console.log('Nota inválida...');
    }
}

SuaNota(10);
SuaNota(8);
SuaNota(4);
SuaNota('balanw');