/*
34) Construa uma função que receberá duas Strings de tamanhos variados e que retornará True ou False caso
todos os caracteres (independentemente de ser maiúsculo ou minúsculo) estejam contidos em ambas palavras.
*/

let str1 = 'pora';
let str2 = 'Caralho';

function Letras(str1, str2) {
    strupper1 = str1.toUpperCase();
    strupper2 = str2.toUpperCase();

    for (let i = 0; i <= strupper1.length; i++) {
        let mesmaletra = strupper2.indexOf(strupper1[i]) !== -1;
        if (strupper1[i] != undefined){
            console.log(`${strupper1[i]}: ${mesmaletra}`);
        }
    }
}

Letras(str1, str2);