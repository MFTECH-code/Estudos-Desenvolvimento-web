const colors = {
    p: "#388e3c",
    div: "#1565c0",
    span: "#e53935",
    section: "#f67809",
    ul: "#5e35b1",
    ol: "#fbc02d",
    header: "#d81b60",
    nav: "#64dd17",
    main: "#00acc1",
    footer: "#304ffe",
    form: "#9f6581",
    body: "#25b6da",
    padrao: "#616161",
    get(tag) {
        return this[tag] ? this[tag] : this.padrao
    }   
}

// Queremos que apareça o nome da tag de cada elemento da página
document.querySelectorAll(".tag").forEach(element => {
    const tagName = element.tagName.toLowerCase()
    console.log(tagName)

    element.style.borderColor = colors.get(tagName)

    if (!element.classList.contains("nolabel")) {
        // Se não tiver o label será aplicado o label
        const label = document.createElement("label") // Criamos um elemento label
        // Vamos injetar a label dentro de cada elemento que tiver marcado com a classe tag
        label.style.backgroundColor = colors.get(tagName)
        label.innerHTML = tagName // Vai receber a tag
        element.insertBefore(label, element.childNodes[0])
    }
});
