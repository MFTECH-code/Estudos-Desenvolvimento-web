// Com let vemos uma pequena diferença, seria como se tivesse memória...

const funcs = [];

for (let i = 0; i < 10; i++){
    funcs.push(function () {
        console.log(i);
    })
}
// Note que agora o resultado deu diferente de quando usamos var...
funcs[2](); // 2
funcs[8](); // 8

