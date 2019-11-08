// colocar a imagem criando uma tag img no body
//lidando com erros

// fetch("rainbow.jpg").then(response =>{ // = const response =await fetch("rainbow.jpg")
//     console.log(response)
//     return response.blob()
// }).then(blob =>{ console.log(blob) // = const blob = await response.blob()
//     document.getElementById("rainbow").src =
//     URL.createObjectURL(blob)
// })

// async await

async function pegaArcoIro(){
    const response =await fetch("rainbow.jpg")
    const blob = await response.blob()
    console.log(response)
    console.log(blob)
    document.getElementById("rainbow").src =
    URL.createObjectURL(blob)
}

pegaArcoIro().then(()=>console.log("Yay, carregou!")).catch(()=> "Droga! não carregou :(")