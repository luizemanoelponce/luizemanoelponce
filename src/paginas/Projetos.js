import '../css/Projetos.css';
import Navbar from '../componentes/Navbar';
import Projeto from '../componentes/Projeto';

function Projetos() {
  return (
    <div>
      <Navbar></Navbar>
      <main className="Projetos">
      <h2>Meus Projetos:</h2>
        <section>
          <Projeto 
            imagem="amazing.webp" 
            nome="Amazing Graph" 
            descricao="Desafio do DevChallange:
            Seu desafio é criar uma página sobre um site de criação de gráficos" 
            link="https://github.com/luizemanoelponce/AmazingGraph"
          ></Projeto>

          <Projeto 
              imagem="codar.webp" 
              nome="Codar" 
              descricao="Desafio do DevChallange: Seu desafio é criar uma página sobre uma empresa que desenvolve sites" 
              link="https://github.com/luizemanoelponce/codar"
          ></Projeto>

          <Projeto 
              imagem="ibge.webp" 
              nome="Ibge-News" 
              descricao="Feed de notícas consumindo a API pública do IBGE" 
              link="https://github.com/luizemanoelponce/ibge-news"
          ></Projeto>

          <Projeto 
              imagem="biblioteca.webp" 
              nome="Biblioteca" 
              descricao="Desafio do DevChallenge:
              Seu desafio é criar o backend para um sistema de gerenciamento de uma biblioteca!
              Criado com lumem, um microframework do Laravel" 
              link="https://github.com/luizemanoelponce/biblioteca-backend"
          ></Projeto>
        </section>
      </main>
    </div>
  );
}

export default Projetos;
