import logo from "../../assets/imagens/logo_shugo.png";

import styles from "./styles.css";

export default function Header({children}) {
	return(
		<div className="header">
		<header className="container">
			<div className="logo">
				<img src={logo} width={200}/>
			</div>
			<div>
				<div className="search-container">
					<input type="text" className="input"/>
					<button>
						<img src="https://img.icons8.com/android/16/000000/search.png" width={16}/>
					</button>
				</div>
			</div>
			<div className="auth-container">
				<button className="buttons-auth">ENTRAR</button>
				<button className="buttons-auth sing-up">CADASTRAR</button>
			</div>
		</header>
		{children}
		</div>
	);
}