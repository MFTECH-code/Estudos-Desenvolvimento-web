const notas = [6.6, 7.5, 8.9, 5.5, 4.5, 8.0];

// Sem callback
const notasBaixas1 = [];
for (let i in notas) {
    if (notas[i] < 7) {
        notasBaixas1.push(notas[i]);
    }
}
console.log(notasBaixas1);

// Com callback

const notasBaixas2 = notas.filter((nota) => nota < 7); // Se for true vai pra array notasBaixas2 se for falso não vai
console.log(notasBaixas2);

// Com callbacks economizamos linhas de código...