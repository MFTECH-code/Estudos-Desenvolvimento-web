var valor = 1;
{
    var valor = 2;
    console.log(`Dentro = ${valor}`);
}
console.log(`Fora = ${valor}`);

// Note que mesmo colocando em blocos diferentes o valor ira receber 2 nos dois casos...
// Isso não acontece com let...