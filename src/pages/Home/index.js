import { useEffect } from "react";

import Header from "../../components/Header";
import Produto from "../../components/Produto";

import menuLogo from "../../assets/imagens/menu.png";

import styles from "./styles.css";

export default function Home(){

  useEffect(() => {

  },[]);
  const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
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
         <div style={{display: "none"}} id="options">
             <ul>
               <li>
                 <button>Pizza</button>
               </li>
               <li>
                 <button>Massas</button>
               </li>
               <li>
                 <button>Lanches</button>
               </li>
               <li>
                 <button>Doces</button>
               </li>
               <li>
                 <button>Blusas</button>
               </li>
             </ul>
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

    <div className="catalogo">
      <div className="itens catalogo">
      {data && data.map(()=> (
        <Produto 
          image="https://ui-avatars.com/api/?name=Ryann+Ferreira?size=16?background=random"
          name="teste" 
          price="2,50"
         />
        ))}
      </div>
      <div className="description">
        <h3>Descrição</h3>
        <span>{"teste teste  teste teste teste teste teste teste teste teste teste "}</span>
      </div>
    </div>
  </>
	);
}