//efeito de esconder formulário de cadastro
$(document).ready(function(){
    $("#botao-cadastrar").click(function(){
    $("#form-cadastrar").slideToggle("slow");
    $("#section-login").slideToggle("slow");
    if ($("#btnCadastroLogin").html() == "Não é cadastrado ainda? Cadastre-se") {
        $("#btnCadastroLogin").html ("Já é cadastrado? Faça login!");
    } else {
        $("#btnCadastroLogin").html ("Não é cadastrado ainda? Cadastre-se");
    }
});
});
