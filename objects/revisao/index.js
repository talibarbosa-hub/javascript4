function Professor(nome, sobrenome, materia) {
    this.nome = nome
    this.sobrenome = sobrenome
    this.materia = materia
     
}

let professor1 = new Professor("Raissa","Martins","Bootstrap")
let professor2 = new Professor("Paula","Alemand","HTML")

professor1.prototype.dizMateria = function(){
    return `A materia é:${this.materia}`
}
    
}
console.log(professor1.materia);
console.log(professor2.nome);
