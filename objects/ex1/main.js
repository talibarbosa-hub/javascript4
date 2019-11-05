class Botao {
    constructor(texto, cor, tamanho, icone){
        this.texto = texto
        this.cor = cor
        this.tamanho = tamanho
        this.icone = icone
    }
    desenhaBotao(){
        const novoBotao= document.createElement("button")
        novoBotao.setAttribute("class", `${this.cor} ${this.tamanho}`)
        if(this.icone){
            //<i></i>
            const tagIcone =document.createElement("i")
            tagIcone.setAttribute("class", `fas ${this.icone}`)
            novoBotao.appendChild(tagIcone)
            const text = document.createTextNode(this.texto)
            novoBotao.appendChild(text)
        
   } else {
       novoBotao.innerHTML = this.texto
    }
    document.getElementById("buttons-section").appendChild(novoBotao)
}
desenhaBotaoString(){
    return `<button class="${this.cor} ${this.cor}">
    ${this.cor ? `<i class ="fas ${this.icone}"></i>` : ""} ${this.texto}
    </button>`
}
}

const botaoVerde =new Botao("enviar", "verde", "pequeno","fa-plus")
botaoVerde.desenhaBotao()

const botaoAzul = new Botao("enviar", "azul", "medio", "fa-fan")
botaoAzul.desenhaBotao()

document.getElementById("buttons-section").insertAdjacentHTML("beforeend",botaoVerde.desenhaBotaoString())
