<<<<<<< HEAD
import Produto from "../../components/Produto";
import styles from "./styles.css";
=======
import api from "../../services/api";

export default function Loja() {

	return (
		<>
			<header>
				<img src="/imagens/Group 1.png" alt="" id="logo"/>
				<div id="barra_pesquisa">
					<input type="text" />
				</div>
>>>>>>> 1c7f7c3c83da566d2a485e8b8cb56a35128058c3

import Header from "../../components/Header";

export default function Loja() {
  const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <>
      <Header>
	  
	  </Header>


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
          <br />
        </div>
        <div className="itens">
		{data &&
            data.map(() => (
              <Produto
                image="https://ui-avatars.com/api/?name=Ryann+Ferreira?size=16?background=random"
                name="teste"
                price="2,50"
              />
            ))}
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
