import { Link } from "react-router-dom";

import logoShugo from "../../assets/imagens/logo_shugo.png";
import userIcon from "../../assets/imagens/user.png";

export default function CadastroUsuario() {

	return(
		<>
    <header>
      <img src={logoShugo} alt="" id="logo" />
    </header>

    <div id="inicio">
      <img src={userIcon} alt="" />
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
        <Link to="/" ><button id="botao">Cadastrar</button></Link>
      </div>
    </div>

    <div id="direcionar">
      <p>Já tem uma conta?</p>
      <Link to="/login">Entrar</Link>
    </div>

    <p id="rodapé">
      Ao continuar com o acesso, você concorda com a nossa política de
      privacidade
    </p>
  </>
	);
}