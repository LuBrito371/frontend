import { useState } from "react";
import { useHistory, Link } from "react-router-dom";
import styles from "./styles.css";

import shugoLogo from "../../assets/imagens/logo_shugo.png";
import userIcon from "../../assets/imagens/user.png";

import api from "../../services/api";

export default function Login(){
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");

  const history = useHistory();

  async function loginUser(){
    const response = await api.get("/authenticate/store",{
      body: {
        email,
        password
      }
    })

    if(response.status == 400) {
      alert("erro no login, veja se seus dados estão certos");
      return 
    }

    localStorage.setItem("user", "");
    localStorage.setItem("loja", "n");
    
    history.push("home");
  }

	return(
		<>
    <header className="login">
    <Link to="/home"><img src={logo} alt="" id="logo" /></Link>
    </header>
    <div id="inicio">
      <img src={userIcon} alt="" />
      <h1>Login de usuário</h1>
    </div>

    <div id="barrinha">
      <hr /><p>Entre com seus dados</p><hr/>
    </div>
    <form className="formLogin" >
        <div id="dados">
        <p>Email</p>
        <input  
            type="text" 
            id="email" 
            value={email}
            onChange={event => setEmail(event.target.value)}
          />
        <p>Senha</p>
        <input type="password" 
          id="senha"
          value={password}
          onChange={event => setPassword(event.target.value)}/>
        <button id="login" type="submit">Login</button>
      </div>

      <div id="check">
        
        <p>Selecione</p>
        <select>
          <option>Cliente</option>
          <option>Loja</option>
        </select>


      </div>

      
    </form>
    
    <div id="direcionar">
        <p>Não tem um cadastro? </p>
        <Link to="cadastro">Cadastre-se</Link>
    </div>
    <p id="rodapé">Ao continuar com o acesso, você concorda com a nossa política de privacidade</p>
  </>
	);
}