// CallBack é passar uma função para outra função e quando determinado evento acontecer essa função que passamos vai ser
// disparada, ela pode ser disparada várias vezes ou só uma vez depende do que você quer fazer...


const fabricantes = ['BMW', 'Audi', 'Mercedes'];

function imprimir(nome, indice) {
    console.log(`${indice + 1}.${nome}`);
}

// Vamos fazer um callback

fabricantes.forEach(imprimir); // Usamos a função forEach para cada elemento que ele encontrar na array ele vai
// chamar de volta a função imprimir.

fabricantes.forEach((fabricante) => console.log(fabricante)); // Aqui ele retorna cada elemento.

// Funciona como um for para desempacotar estrutura compostas...

