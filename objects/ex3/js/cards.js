
class Cards{
    constructor(receita){
        this.receita = receita
    }
        render(){
            return  `<div class= "card">
            <img class = "imagem" src ="${this.receita.imagem}"/>
            <h2>${this.receita.titulo}</h2>
            <p class ="ingredientes">${this.receita.ingredientes}</p>
            </div>`
            document.querySelector(".cards").insertAdjacentHTML('beforeend', card) // insertAdjacentHTML concatena
    }
}


// ou
// ECMA6 desconstruir o objeto 
// render(){
//     const{  
//         imagem,
//         titulo,
//         ingrediente,
//     } = this.receita
//     return`<div class= "card">
//     <img class = "imagem" src ="${imagem}"/>
//     <h2>${titulo}</h2>
//     <p class ="ingredientes">${ingredientes}</p>
//     </div>`



