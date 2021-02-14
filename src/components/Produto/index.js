import styles from "./styles.css";
import { useHistory, Link } from "react-router-dom";
export default function Produto({ produto }){
	return(
		<div className="container-produto">
			<img src={produto.image} width={44}/>
			<div className="infos">
				<span className="name">{produto.name}</span>
				<span className="price">R$ {produto.price}</span>
			</div>
		</div>
	);

	const history = useHistory()
	function irLoja(){
		
		localStorage.setItem("/index/product", JSON.stringify(produto));
	window.location.replace("http://localhost:3000/loja");
	history.push("produto");
	}
}