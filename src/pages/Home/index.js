import { useEffect } from "react";
import { Carousel } from "react-responsive-carousel";

import Header from "../../components/Header";
import Produto from "../../components/Produto";

import menuLogo from "../../assets/imagens/menu.png";
import bannerImage1 from "../../assets/imagens/shugo1.png";
import bannerImage2 from "../../assets/imagens/Frame 12.png";
import bannerImage3 from "../../assets/imagens/Shugo 2.png"

import styles from "./styles.css";
import stylesCarrosel from "./styles_carrosel.css";

export default function Home() {
  const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
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
            <div style={{ display: "none" }} id="options">
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
      <Carousel showThumbs={false} dynamicHeight>
        <div>
          <img src={bannerImage3} />
        </div>
        <div>
          <img src={bannerImage2} />
        </div>
        <div>
          <img src={bannerImage1} />
        </div>
      </Carousel>
      <div className="catalogo">
        <div className="itens catalogo">
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
    </>
  );
}
