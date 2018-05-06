<!-- Script -->

    function validar() {
      var cpf = form1.cpf.value;
      var nome = form1.nome.value;
      var email = form1.email.value;
      var senha = form1.senha.value;
      var r_senha = form1.r_senha.value;

    if (cpf.length < 11){
      alert('CPF invalido!');
      form1.cpf.focus();
      return false;
    }
    if (senha != r_senha) {
      alert('Senhas diferentes!');
      form1.senha.focus();
      return false;
    }
    if (senha == ""){
      alert('Preencha a senha');
      form1.senha.focus();
      return false;
    }
    if ((nome == "") || (nome.length < 5)) {
      alert('Preencha o campo com seu nome');
      form1.nome.focus();
      return false;
    }

  alert('Cadastrado com sucesso!');
  window.location.href="index.htm";

  }
