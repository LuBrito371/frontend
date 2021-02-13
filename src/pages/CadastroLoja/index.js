import styles from "./styles.css";
import logo from "../../assets/imagens/logo_shugo.png"
import user from "../../assets/imagens/user.png"
import { Link } from "react-router-dom";

export default function CadstroLoja() {

	return(
	<>
    <header class="cadLoj">
      <Link to="/home"><img src={logo} alt="" id="logo" /></Link>
    </header>

    <div id="inicioLoja">
      <img src={user} alt="" />
      <h1>Cadastre-se</h1>
    </div>

    <div id="barrinhaLoja">
      <hr />
      <p>Preencha o formulário abaixo</p>
      <hr />
    </div>

    <div class="dadosLoja">
      <div id="dados1Loja">
        <p>Endereço</p>
        <input type="text" />
        <p>Telefone</p>
        <input type="text" />
        <p>CNPJ</p>
        <input type="text" />
      </div>

      <div id="dados2Loja">
        <p>Email</p>
        <input type="text" />
        <p>Senha</p>
        <input type="text" />
        <Link to="/"><button id="botaoLoja">Cadastrar</button></Link>
      </div>
    </div>

    <div id="direcionarLoja">
      <p>Já tem uma conta?</p>
      <a href="login.html">Entrar</a>
    </div>

    <p id="rodapéLoja">
      Ao continuar com o acesso, você concorda com a nossa política de
      privacidade
    </p>

  </>
	);
}