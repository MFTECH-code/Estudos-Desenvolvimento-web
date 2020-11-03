const funcs = [];

for (var i = 0; i < 10; i++){
    funcs.push(function (){
        // A cada push que eu fizer irei imprimir o que puxei...
        console.log(i);
    })
}

// Note que pelo fato de estar fora do escopo o resultado será 10
// Mesmo escolhendo qual posição queremos que ele procure...
funcs[2]();
funcs[8]();