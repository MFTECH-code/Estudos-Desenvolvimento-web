// Usando destructuring com arrays

const lista = [1, 2, 3];

// Quando usamos o destructuring em arrays usamos [ ]
const [a, b, c] = lista;
console.log(a, b, c);

// Também ja podemos colocar as variávis e a array na mesma linha
const [num] = [10];
console.log(num); 

const [n1, , n3, n4, , n6, n7 = 8] = [4, 6, 9, 1, 7];
console.log(n1, n3, n4, n6, n7);

