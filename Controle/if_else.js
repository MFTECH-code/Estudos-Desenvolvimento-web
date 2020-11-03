// if -> se 
// else -> se não

function MediaEscolar(nota1, nota2, nota3, nota4) {
    const soma = nota1 + nota2 + nota3 + nota4;
    const media = soma / 4;
    let passou = false;
    if (media >= 6) {
        console.log(`O aluno foi aprovado com ${media.toFixed(2)}...`);
        passou = true;
    } 
    else {
        console.log(`Infelizmente o aluno não foi aprovado... com ${media.toFixed(2)}`);
    }
    if (passou) {
        console.log('Parabéns!!!')
    }
    else {
        console.log('Estude mais da próxima vez...')
    }
}


MediaEscolar(5, 2, 6, 4);
MediaEscolar(9, 8, 7, 10);

// Usando else if...

function CheckList(obj) {
    if (obj.idade >= 1 && obj.idade < 18) {
        console.log('Você é apenas uma criança...');
    }
    else if (obj.idade >= 18 && obj.idade < 30) {
        console.log('Você é um jovem adulto...');
    }
    else if (obj.idade >= 30 && obj.idade < 50) {
        console.log('Você já é um adulto...');
    }
    else if (obj.idade >= 50 && obj.idade < 80) {
        console.log('Você ja está idoso...');
    }
    else {
        console.log('Você está cobrando hora extra na terra...');
    }
}

const pessoa = {
    nome: 'Matheus',
    idade: 95
};

CheckList(pessoa);

