"use strict"

const imagens = [
    "./img/img1.jpg",
    "./img/img2.jpg",
    "./img/img3.jpg",
    "./img/img4.jpg",
    "./img/img5.jpg",
    "./img/img6.jpg",
    "./img/img7.jpg",
    "./img/img8.png"
]

const limparId = (urlImagem) => urlImagem
.split("/")[2]
.split(".")[0]
.replace(" ", "-")
.toLowerCase()

const criarItem = (urlImagem) => {
    const container = document.querySelector(".galeria-container")
    const novoLink = document.createElement("a")
    novoLink.href = `#${limparId(urlImagem)}`
    novoLink.classList.add("galeria-itens")
    novoLink.innerHTML = `<img src="${urlImagem}" alt="">`
    container.appendChild(novoLink)
}

const carregarImagens = () => imagens.forEach(criarItem)

const criarSlide = (urlImagem, indice, arr) => {
    const container = document.querySelector(".slide-container")
    const slide = document.createElement("div")
    slide.classList.add("slide")
    slide.id = limparId(urlImagem)

    const indiceAnterior = indice > 0 ? indice - 1 : arr.length - 1

    // let indiceAnterior
    // if (indice > 0) {
    //     indiceAnterior = indice - 1
    // }else{
    //     indiceAnterior = arr.length - 1
    // }

    const idAnterior = limparId(arr[indiceAnterior])
   
    const indiceProximo = indice < arr.length - 1 ? indice + 1 : 0
    const idProximo = limparId(arr[indiceProximo])

    slide.innerHTML = `
    <div class="imagem-container">
                    <a href="" class="fechar">&#10006;</a>
                    <a href="#${idAnterior}" class="navegacao anterior">&#171;</a>
                    <img src="${urlImagem}" alt="">
                    <a href="#${idProximo}" class="navegacao proximo">&#187;</a>
    </div>
    `
    container.appendChild(slide)
}

const carregarSlides = () => imagens.forEach(criarSlide)

carregarImagens()

carregarSlides()