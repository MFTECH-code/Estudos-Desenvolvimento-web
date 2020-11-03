// Podemos fazer diversas coisas com funções.
/*
    Função em JS é First-Class Object (Citzen).
    Higher-order function
*/

// Criando de forma literal:
function fun1() {
    // Caso você não chame o return por padrão toda fundão retorna undefined.
    return(console.log("Funçã Literal"));
}
// Armazenar em uma variável:
const fun2 = function () {
    // Note que criamos uma função anônima e atribuimos a esta função uma constante denominada fun2.
    return(console.log("Função armazenada em uma variável"));
}
// Armazenar dentro de uma array:
const array = [
    function (a, b) {
        return(a + b);
    },
    // Podemos armazenar outras funções dentro de arrays
    fun1,
    fun2
]
// Armazenar em atríbuto de um objeto:
const obj = {}
obj.falar = function () { 
    return('opa');
}
// Passando uma função como parâmetro para outra função:
function run (fun) {
    fun();
}
// Uma função pode retornar ou conter uma outra função:
function soma (a, b) {
    return function (c) {
        console.log(a + b + c);
    }
}

fun1();
fun2();
console.log(array[0](5, 3));
console.log(obj.falar());
run(function ola () { return(console.log("Olá")) }); // Podemos criar ou ja colocar uma função existente e ela sera executada.
soma(2, 4)(3);