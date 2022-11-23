const itens = document.getElementById("itens")
let menuOpn = false
const corpo = window.document.body
const corpo_observer = new ResizeObserver((entries) => {
    if (window.innerWidth >= 768) {
        itens.style.display = "block"
    } else {
        itens.style.display = "none"
    }
})
corpo_observer.observe(corpo)
burguer.addEventListener("click", () => {
    if (!menuOpn) {
        itens.setAttribute("class", "aberto")
        menuOpn = true
    } else {
        itens.setAttribute("class", "fechado")
        menuOpn = false
    }
})