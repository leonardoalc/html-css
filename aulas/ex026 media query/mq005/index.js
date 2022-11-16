const itens = document.getElementById("itens")
let menuOpn = false
burguer.addEventListener("click", () => {
    if (!menuOpn) {
        itens.setAttribute("class", "aberto")
        menuOpn = true
    } else {
        itens.setAttribute("class", "fechado")
        menuOpn = false
    }
})