console.log(typeof String);
console.log(typeof Array);
console.log(typeof Object);
// Esses três são funções, logo os 3 possuem o prototype

// Forma de adicionar novas funções dentro de um protótipo Exemplo será a String
String.prototype.reverse = function () {
    return this.split('').reverse().join(''); //split irá quebrar a string e colocar ela em uma array
    // Como o array possui a função reverse iremos reverter a nossa array
    // join para juntar td em uma string novamente...

}

console.log('Matheus Feitosa'.reverse());

// Dessa forma podemos criar métodos que a linguagem não oferece, assim facilitando nossa vida

Array.prototype.first = function () {
    return this[0];
}

console.log([1, 2, 3, 4].first());

// Tome cuidado para não mecher em funções já existentes dentro da linguagem pode da merda
