//efeito do botão voltar ao Topo
function topo(){
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'})
}
//Validação de Login
function login(){
    var nome = document.getElementById("usuario").value;
    var senha = document.getElementById("senha").value;
    if(nome == "" || senha == ""){
        alert("Preencha todos os campos");
    }else{
        var logado = 0;
        var usuario = document.getElementsByName('usuario')[0].value;
        var senha = document.getElementsByName('senha')[0].value;
        usuario = usuario.toLowerCase();
        senha = senha.toLowerCase();
        if(usuario == "admin" && senha == "12345"){
            window.location = "index.html";
            logado = 1;
        }
        if(logado == 0){
            alert("Usuário ou senha incorreto");
        }
    }
}

//Ativar alert no botão cadastrar
function cadastro(){
    var usuario = document.getElementById("usuario").value;
    var senha = document.getElementById("senha").value;
    var email = document.getElementById("email").value;
    if(usuario == "" || senha == "" || email == ""){
        alert("Preencha todos os campos");
    }else{
    alert("Cadastrado com sucesso!");
    window.location.href = "index.html";
    }
}
