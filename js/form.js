
//class contato

class Contato {
<<<<<<< HEAD
    constructor(nome, sobrenome, email, cpf, telefone, contato) {
        this.nome = nome;
=======

    constructor(nome, sobrenome, email, cpf, telefone, contato){
        this.nome = nome,
>>>>>>> 65cf6e3d3fd074bf9d2d5811fd37a80ea53e2701
        this.sobrenome = sobrenome;
        this.email = email;
        this.cpf = cpf;
        this.telefone = telefone;
        this.contato = contato;
    }
<<<<<<< HEAD
    
=======
>>>>>>> 65cf6e3d3fd074bf9d2d5811fd37a80ea53e2701
}

function Post(form) {

<<<<<<< HEAD
  let data = new Contato(form.elements.namedItem("nome").value,
            form.elements.namedItem("sobrenome").value, 
            form.elements.namedItem("email").value, 
            form.elements.namedItem("cpf").value, 
            form.elements.namedItem("telefone").value, 
            form.elements.namedItem("contato").value);
  
}
=======
    let data = new Contato(form.elements.namedItem("nome").value,
                form.elements.namedItem("sobrenome").value, 
                form.elements.namedItem("email").value, 
                form.elements.namedItem("cpf").value, 
                form.elements.namedItem("telefone").value, 
                form.elements.namedItem("contato").value);
    
    console.log(data);
>>>>>>> 65cf6e3d3fd074bf9d2d5811fd37a80ea53e2701

    form.reset();

    alert(`Obrigado sr(a) ${data.nome} ${data.sobrenome}, os seus dados foram encaminhados com sucesso`)

    return false;
}
 function Enviar() {

    var nome = document.getElementById("nomeid");

    if (nome.value != "") {
       alert('Obrigado sr(a) ' + nome.value + ' os seus dados foram encaminhados com sucesso');
   }

 }