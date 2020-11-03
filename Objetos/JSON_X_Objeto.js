// JSON é um arquivo usado para compartilhamento de dados entre sistemas

const obj = { a: 1, b: 2, c: 3, soma() {return a + b + c} }
console.log(obj)
console.log(JSON.stringify(obj)) // -> Gerando um JSON 
// A função no JSON foi excluida, porque o JSON é um formato de dados
console.log(JSON.parse('{ "a": 1, "b": 2, "c": 3 }')) // -> Gerando um Objeto com JSON
console.log(JSON.parse('{ "nome": "Matheus", "idade": 20, "Dev": true, "Objeto": {}, "Array": [] }')) // Note que sempre usamos "" nas keys e nas strings
// JSON tambem aceita objetos e arrays