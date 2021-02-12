export default function Loja() {
	var home = document.getElementById('logo');

	home.onclick = function () {
		window.location.href = 'home.html';
	}

	return (
		<>
			<header>
				<img src="/imagens/Group 1.png" alt="" id="logo"/>
				<div id="barra_pesquisa">
					<input type="text" />
				</div>

				<div id="entrar">
					<a href="login.html">Entrar</a>
				</div>
				<div id="cadastrar">
					<a href="tipo_conta.html">Cadastrar</a>
				</div>
   		</header>

			<div id="capa">
				<img src="/imagens/menu.png" alt="" />
					<div id="hora_func">
						<h3>Horário de Funcionamento</h3>
						<ul>seg</ul>
						<ul>ter</ul>
						<ul>qua</ul>
						<ul>qui</ul>
						<ul>sex</ul>
						<ul>sab</ul>
						<ul>dom</ul>
					</div>
    	</div>

			<div id="foto">
				<img src="/imagens/menu.png" alt="" />
    	</div>

			<div id="nome_slogan">
				<h3>Nome da loja</h3>
				<h3>Slogan da loja</h3>
			</div>

			<div className="catalogo">
				<div id="nome">
					<h2>Catálogo</h2>
					<br/>
        </div>
				<div className="itens">
					<div id="item">
						Teste
        	</div>

					<div id="item">
						Teste
					</div>

					<div id="item">
						Teste
					</div>

				</div>
			</div>

			<div id="nota">
				<h4>Média de Avaliações</h4>
			</div>

			<div id="avaliacao">
				<h4>Avalie essa loja</h4>
			</div>

			<div id="descricao">
				<h3>Descrição</h3>
			</div>
		</>
	);
}