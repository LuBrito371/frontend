export default function EditPerfil(){
  return(
    <>
    <header>
      <img src="/imagens/Group 1.png" alt="" />
    </header>

    <div id="capa">
      <img src="/imagens/menu.png" alt="" />
      <div id="hora_func">
        <h3>Horário de Funcionamento</h3>
        <ul>
          seg
        </ul>
        <ul>
          ter
        </ul>
        <ul>
          qua
        </ul>
        <ul>
          qui
        </ul>
        <ul>
          sex
        </ul>
        <ul>
          sab
        </ul>
        <ul>
          dom
        </ul>
      </div>
    </div>

    <div id="foto">
      <img src="/imagens/menu.png" alt="" />
    </div>

    <div id="nome_slogan">
      <h3>Nome da loja</h3>
      <h3>Slogan da loja</h3>
    </div>

    <div class="catalogo">
      <div id="titulo">
        <h2>Catálogo</h2>
        <button>Adicionar item</button>
      </div>
      <div class="itens">
        <div id="item">Teste</div>

        <div id="item">Teste</div>
        <div id="item">Teste</div>
      </div>
    </div>

    <div id="descricao">
      <h3>Descrição</h3>
    </div>
  </>
  );
}