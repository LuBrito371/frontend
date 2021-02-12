export default function CadstroLoja() {

  var home = document.getElementById("logo");

  home.onclick = function () {
    window.location.href = "home.html";
  };

  var btn = document.getElementById("botao");

  btn.onclick = function () {
    window.location.href = "edit_perfil.html";
  };

	return(
	<>
    <header>
      <img src="/imagens/Group 1.png" alt="" id="logo" />
    </header>

    <div id="inicio">
      <img src="/imagens/user.png" alt="" />
      <h1>Cadastre-se</h1>
    </div>

    <div id="barrinha">
      <hr />
      <p>Preencha o formulário abaixo</p>
      <hr />
    </div>

    <div class="dados">
      <div id="dados1">
        <p>Endereço</p>
        <input type="text" />
        <p>Telefone</p>
        <input type="text" />
        <p>CNPJ</p>
        <input type="text" />
      </div>

      <div id="dados2">
        <p>Email</p>
        <input type="text" />
        <p>Senha</p>
        <input type="text" />
        <button id="botao">Cadastrar</button>
      </div>
    </div>

    <div id="direcionar">
      <p>Já tem uma conta?</p>
      <a href="login.html">Entrar</a>
    </div>

    <p id="rodapé">
      Ao continuar com o acesso, você concorda com a nossa política de
      privacidade
    </p>

  </>
	
	);
}