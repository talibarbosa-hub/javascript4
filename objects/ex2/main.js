const users = [{
  nome: "Lydia Rodrigues",
  imagem: "https://scontent.fcgh9-1.fna.fbcdn.net/v/t1.0-9/26166938_1133699003400526_8706692885971000189_n.jpg?_nc_cat=100&_nc_oc=AQkW7DAtsoYgehpYbPuUa0PxGmk28SqRXrmw2w48gPX6k97WEI6te9ZVQykcLeU_8d4&_nc_ht=scontent.fcgh9-1.fna&oh=505e19dc3731aba00e6572c4fb8fce33&oe=5E4C587D"
},
{
  nome: "Doge",
  imagem: "https://images-na.ssl-images-amazon.com/images/I/81-yKbVND-L._SY355_.png"
}]

class Div{
  constructor(style, user){
      this.style =style
      this.user = user
  }

criaDiv(){
return `<div class="${this.style}">
  <img class ="img-rounded" src="${this.user.imagem}"/>
  <h2> ${this.user.nome}</h2>
 </div>`
}
}



const div1 = new Div("green avatar", users[0])
const div2 = new Div("green avatar", users[1])

document.getElementById("cards-section").insertAdjacentHTML("beforeend", div1.criaDiv())
document.getElementById("cards-section").insertAdjacentHTML("beforeend", div2.criaDiv())


// Outro jeito de fazer 

class Avatar{
  constructor(usuario){
    this.usuario = usuario
  }

  render() {  // render é metodo que executa o conteudo dado a ele quando a pagina é renderizada
    const avatar = `<div class="avatar green">
    <img class ="img-rounded" src="${this.usuario.imagem}"/>
    <h2>${this.usuario.nome}</h2>
    </div>`
    document.getElementById('cards-section').insertAdjacentHTML('beforeend', avatar)
  }
}

users.map((user) => {  // map funciona como um forEach ele itera sobre cada elemento e retona um array
  new Avatar(user).render()
})


