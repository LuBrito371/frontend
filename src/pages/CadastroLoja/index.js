import { useState } from "react";
import { Link, useHistory } from "react-router-dom";

import api from "../../services/api";

export default function CadstroLoja() {
  const [email,setEmail]= useState("");
  const [password,setPassword]= useState("");
  const [endereco,setEndereco]= useState("");
  const [telefone,setTelefone]= useState("");
  const [cnpj,setCNPJ]= useState("");
  
  const history = useHistory();

  async function cadastrarUsuario(){
    const response = await api.post('/register/store',{
      body: {
        email,
        password,
        endereco,
        telefone,
        cnpj
      }
    });
    if(response.status === 400) {
      alert("erro no cadastro");
    } else {
      localStorage.setItem("loja","s");
      localStorage.setItem("user", "");
      history.push("/home");
    }
  }

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
        <input type="text" 
          value={endereco}
          onChange={event => setEndereco(event.target.value)}/>
        <p>Telefone</p>
        <input type="text"
          value={telefone}
          onChange={event => setTelefone(event.target.value)} />
        <p>CNPJ</p>
        <input type="text" 
          value={cnpj}
          onChange={event => setCNPJ(event.target.value)}/>
      </div>

      <div id="dados2">
        <p>Email</p>
        <input type="text" 
          value={email}
          onChange={event => setEmail(event.target.value)}/>
        <p>Senha</p>
        <input type="text" 
          value={password}
          onChange={event => setPassword(event.target.value)} />
        <Link to="/" ><button id="botao" onClick={() => cadastrarUsuario()}>Cadastrar</button></Link>
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