export default function TipoConta() {

  var home = document.getElementById('logo');

  home.onclick = function () {
    window.location.href = 'home.html';
  }

  return (
    <>
      <header>
        <img src="/imagens/Group 1.png" alt="" id="logo" />
      </header>

      <div id="inicio">
        <h1>Escolha o tipo de conta que deseja</h1>
      </div>

      <div class="botão">
        <div id="btn_container">
          <a href="cadastro_usuário.html">Cliente</a>
          <p>Avalie estabelecimentos</p>
        </div>
      </div>

      <div class="botão">
        <div id="btn_container">
          <a href="cadastro_loja.html"> Loja </a>
          <p>Crie um perfil para seu estabelecimento</p>
        </div>
      </div>

    </>
  );
}