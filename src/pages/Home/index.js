import { useEffect } from "react";

import Header from "../../components/Header";
import styles from "./styles.css";

import menuLogo from "../../assets/imagens/menu.png";

export default function Home(){

  useEffect(() => {

  },[]);
  
	return(
		<>
    <Header>
      <>
       <div className="parte_branca">
         <div className="departments">
           <button>
             <img src={menuLogo} width={26} />
           </button>
           <h4>Procure por departamentos</h4>
         </div>
       </div>
      </>
    </Header>

    <div id="carrossel">
			<a id="prev" href="javascript:menos()"></a>

			<a id="aId">
        <img id="imgId" style={{width: 900}}/>
      </a>

			<a id="next" href="javascript:mais()"></a>

			<form name="form">
				<input type="text" name="texto" />
			</form>
    </div>

    <div className="perfis"></div>
  </>
	);
}