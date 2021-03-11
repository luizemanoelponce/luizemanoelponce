import '../css/Sobre.css';
import Navbar from '../componentes/Navbar';
import Apresentacao from '../componentes/Apresentacao';

function Sobre() {
  return (
    <div>
      <Navbar></Navbar>
      <main className="Sobre">
        <section>
          <div>        
            <Apresentacao 
              text="
              Meu nome é Luiz Emanoel, tenho 19 anos, sou estudante de Análise e Desenvolvimento de Sistemas na Estácio de Sá.
              A muito admiro o poder tranformador da tecnologia, na sociedade, nos processos de gestão e na prestação de serviços,
              por isso, escolhi esta área como minha primeira graduação.
              ">
            </Apresentacao>
          </div>
          <div>
            <a href="https://www.linkedin.com/in/luizemanoel/" target="__blank">
              <img src="linkedin.webp" alt="linkedin"></img>
            </a>
            <a href="https://github.com/luizemanoelponce" target="__blank">
              <img src="github.webp" alt="Github"></img>
            </a>
            <a href="https://api.whatsapp.com/send?phone=+5541984644584" target="__blank">
              <img src="whatsapp.webp" alt="whatsapp"></img>
            </a>
            <a href="https://t.me/luizemanoelponce" target="__blank">
              <img src="telegram.webp" alt="telegram"></img>
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Sobre;
