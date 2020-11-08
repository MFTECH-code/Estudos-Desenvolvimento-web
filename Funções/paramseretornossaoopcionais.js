// Uma função em javascript pode ou não pode ter parâmetros ou retorno, ou seja, é opcional

function area (altura, largura) {
    const area = largura * altura;
    if (area > 20) {
        console.log("Valor acima do permitido...");
        // Se for maior que 20 não retorna nada.
    }
    else {
        // Se for menor que 20 retorna o valor da area.
        return area;
    }
}

area(5, 5);