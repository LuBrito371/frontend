import styled from "./styles.css";

import shugoLogo from "../../assets/imagens/logo_shugo.png";
import userIcon from "../../assets/imagens/user.png";

export default function Login(){

	return(
		<>
    <header>
      <img src={shugoLogo} alt="" id="logo"/>
    </header>
    <div id="inicio">
      <img src={userIcon} alt="" />
      <h1>Login de usuário</h1>
    </div>

    <div id="barrinha">
      <hr /><p>Entre com seus dados</p><hr/>
    </div>

    <div id="dados">
      <p>Email</p>
      <input type="text" id="email"/>
      <p>Senha</p>
      <input type="password" id="senha"/>
      <button id="login">Login</button>
    </div>

    <div id="direcionar">
        <p>Não tem um cadastro? </p>
        <a href="#">Cadastre-se</a>
    </div>
    <p id="rodapé">Ao continuar com o acesso, você concorda com a nossa política de privacidade</p>
  </>
	);
}