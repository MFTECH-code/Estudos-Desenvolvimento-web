const a = 1;
const b = 2;
const c = 3;

// Antigamente...
const obj1 = { a: a, b: b, c: c };
console.log(obj1);
    // Colando funções dentro de objetos
const obj3 = {
    funcao1: function () {
        
    }
}


// ES6
const obj2 = { a, b, c };
console.log(obj2);
    // Colocando funções dentro de objetos
const obj4 = {
    function2 () {
        
    }
}
