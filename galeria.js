"use strict"

// const imagens = [
//     "./img/img1.jpg",
//     "./img/img2.jpg",
//     "./img/img3.jpg",
//     "./img/img4.jpg",
//     "./img/img5.jpg",
//     "./img/img6.jpg",
//     "./img/img7.jpg",
//     "./img/img8.png"
// ]

const criarItem = (urlImagem) => {
    const container = document.querySelector(".galeria-container")
    // container.innerHTML += `
    // <a href="${urlImagem}" class="galeria-itens">
    // <img src="${urlImagem}" alt="">
    // </a>
    // `
    const novoLink = document.createElement("a")
    novoLink.href = urlImagem
    novoLink.classList.add("galeria-itens")
    novoLink.innerHTML = `<img src="${urlImagem}" alt="">`
    container.appendChild(novoLink)
}

const carregarImagens = () => imagens.forEach(criarItem)

carregarImagens()