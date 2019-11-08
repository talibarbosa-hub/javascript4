


// fazer o fetch para ver se carregamos o array de cartas


const cardSection= document.querySelector("#cards-section")
const placeholderCard = {
    nome: "Carta não carregada",
    tipo: "Arcano Maior",
    descricao: "Sem descrição",
    Imagem: "http://via.placeholder.com/250x250",
    link: "http://www.astrolink.com.br"
}
renderizaCarta = carta => {
    const novaCarta = new Card(carta).render()
    cardSection.innerHTML = novaCarta
}

// fetch("./tarot.json").then(response => {
//     return response.json()
// }).then(json => {
// console.log(json)
// renderizaCarta(selecionaCartaAleatoria(json))
// })
    

  selecionaCartaAleatoria = cartas => {
        const random = Math.floor(Math.random() * cartas.length)
        return cartas[random]
        console.log(random)
    }

async function carregaCartas(){
    try{
    const response =await fetch("./tarot.json")
    const json =await response.json()
    renderizaCarta(selecionaCartaAleatoria(json))
    } catch(e){
        renderizaCarta(placeholderCard)
        errorSection.innerHTML = `A requisição falou ${e}`
    }
    // console.log(response)
    // console.log(json)
}

carregaCartas()


novaCarta =() => {
    carregaCartas()
}