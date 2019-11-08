const cepInput = document.getElementById("cep")
const logradouroInput = document.getElementById("logradouro")
const complemento = document.getElementById("complemento")
const bairro = document.getElementById("bairro")
const localidade = document.getElementById("localidade")
const uf = document.getElementById("uf")
const error = document.querySelector("#cep-error")// submete automaticamente o valor do input quando tira o curso do campo. 

//... continuem a pegar os inputs do index.html para preencher depois com o valor da api

cepInput.addEventListener("blur", ()=>{ 
    if(cepInput.value){
        fetch(`https://viacep.com.br/ws/${cepInput.value}/json`).then(response => {
            return response.json()
        }).then(json => {
            error.innerHTML = ""
            ///façam aparecer os valores nos inputs
            console.log(json)
            preencheCampos(json)
        }).catch(
            error.innerHTML = `Não conseguimos localizar seu cep`)
            //.then(limpaCampos())
   }
})

 preencheCampos =(objetoRecebido)=> {
 logradouroInput.value = objetoRecebido.logradouro
 complemento.value = objetoRecebido.complemento
 bairro.value = objetoRecebido.bairro
 localidade.value = objetoRecebido.localidade
 uf.value = objetoRecebido.uf

}

// limpaCampos =((objetoRecebido)=> {
//     logradouroInput.innerHTML = ""
//     complemento.innerHTML = ""
//     bairro.innerHTML = ""
//     localidade.innerHTML = ""
//     uf.innerHTML = ""
   
//    })
