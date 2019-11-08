const titulo= document.getElementById("titulo")
const descrição =document.getElementById("descricao")
const btnSubmit =document.getElementById("btn-submit")
btnSubmit.addEventListener("click", function(evento){
    evento.preventDefault() // para impedir de submeter e enviar o formulario
    let body = JSON.stringify({ // construção do payload
        title: titulo.value,
        body: descricao.value,
        userId: 1
    })
 fetch("https://jsonplaceholder.typicode.com/posts", { // fetch por padrão envia a requisição com GET 
      method: "POST", // objeto que vamos enviar
      headers:{ 
          "content-type": "application/json"
      },
      body
 }).then(response => response.json()).then(json=>console.log(json))
})
