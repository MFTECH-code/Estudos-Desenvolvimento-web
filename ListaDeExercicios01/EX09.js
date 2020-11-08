/*
09) Construa uma função para um sistema de notas de uma instituição que possui a seguinte política de
classificação: Todo aluno recebe uma nota de 0 a 100. Alunos com nota abaixo de 40 são reprovados. As notas
possuem a seguinte regra de arredondamento: Se a diferença entre a nota e o próximo múltiplo de 5 for menor
que 3, arredondar a nota para esse próximo múltiplo de 5. Se a nota for abaixo de 38, não é feito nenhum
arredondamento pois esta nota resulta na reprovação do aluno. Por exemplo, a nota 84 será arredondada para
85, mas a nota 29 não será arredondada por ser abaixo de 40 e não ser possível arredondamento eficiente, ou
seja, que evite a reprovação do aluno. No caso de a nota ser 38, o arredondamento é possível pois atingirá 40
e o aluno será aprovado.
*/

// Se a diferença entre a nota e o próximo múltiplo de 5 for menor que 3: Se o cara tirar 38 -> Nota = 40 
// Mas Se a nota for abaixo de 40 e não ser pssível arredondamento eficiente a nota não será arredondada
// Arredondamento: nota + (5 - (nota % 5))

function ArredondarNota(Nota) {
    if (Nota % 5 > 2) {
        return Nota + (5 - (Nota % 5));
    } else {
        return Nota;
    }
}

function ClassificadorNota(Nota) {
    let NotaNova = ArredondarNota(Nota);
    if (NotaNova >= 40) {
        return `Você foi aprovado com ${NotaNova}`;
    } else {
        return `Você foi Reprovado com ${Nota}`;
    }
}



console.log(ClassificadorNota(100));
console.log(ClassificadorNota(30));
console.log(ClassificadorNota(38));
console.log(ClassificadorNota(88));
console.log(ClassificadorNota(61));