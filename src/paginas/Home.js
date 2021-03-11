import '../css/Home.css';
import Navbar from '../componentes/Navbar';
import Apresentacao from '../componentes/Apresentacao';
import Botao from '../componentes/Botao';

function Home() {
  return (
    <div>
      <Navbar></Navbar>
      <main className="home">
        <section>
          <div>        
            <h2>Desenvolvedor Full Stack</h2>
            <Apresentacao 
              text="
              Olá visitante, este é meu portfólio, lugar que criei para me apresentar e mostrar alguns dos projetos
              que desenvolvi até agora; Também é resultado do meu primeiro contato com React.js, então, se puder,
              gostaria do seu feedback sobre ele, que você pode me enviar através de alguma das redes da aba Sobre.
              Espero que goste =D
              ">
            </Apresentacao>
            <Botao link="curriculo.pdf" texto="Meu Currículo"></Botao>
          </div>
        </section>
        <section>

          <div>

            <img src="./vector.webp" alt=" "/>
            <img src="./image-top.webp" alt=" "/>
            <img src="./elePHPant.webp" alt=" "/>
            <img src="./JS.webp" alt=" "/>
            <img src="./css.webp" alt=" "/>

          </div>

        </section>
        
      </main>
    </div>
  );
}

export default Home;
