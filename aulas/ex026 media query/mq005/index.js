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
const corpo = window.document.body
let confirm = true
const corpo_observer = new ResizeObserver(() => {
    console.log("3")
    if (window.innerWidth >= 768) {
        itens.setAttribute("class", "aberto")
        menuOpn = true
        confirm = true
        console.log("2")
    } else {
        if (confirm) {
            itens.setAttribute("class", "fechado")
            menuOpn = false
            confirm = false
            console.log("1")
        }
    }
})
corpo_observer.observe(corpo)