import "./styles.css";

export default function Produto({ name, price, image }){
	return(
		<div className="container-produto">
			<img src={image} width={44}/>
			<div className="infos">
				<span className="name">{name}</span>
				<span className="price">R$ {price}</span>
			</div>
		</div>
	);
}