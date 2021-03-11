import '../css/Tecnologias.css';
import Navbar from '../componentes/Navbar';
import TecnologiasSessao from '../componentes/TecnologiasSessao';

function  Tecnologias() {
  return (
    <div>
      <Navbar></Navbar>
      <main className="tecnologias">
      <h2>Minhas Tecnologias:</h2>
        <section>
          <TecnologiasSessao imagem="./html.webp" porcentagem="95%"></TecnologiasSessao>
          <TecnologiasSessao imagem="./css.webp" porcentagem="60%"></TecnologiasSessao>
          <TecnologiasSessao imagem="./bootstrap.webp" porcentagem="55%"></TecnologiasSessao>
          <TecnologiasSessao imagem="./elePHPant.webp" porcentagem="70%"></TecnologiasSessao>
          <TecnologiasSessao imagem="./JS.webp" porcentagem="45%"></TecnologiasSessao>
          <TecnologiasSessao imagem="./laravel.min.svg" porcentagem="50%"></TecnologiasSessao>
          <TecnologiasSessao imagem="./logo512.webp" porcentagem="35%"></TecnologiasSessao>
          <TecnologiasSessao imagem="./git.webp" porcentagem="55%"></TecnologiasSessao>
          <TecnologiasSessao imagem="./sql.webp" porcentagem="60%"></TecnologiasSessao>
        </section>
        
      </main>
    </div>
  );
}

export default Tecnologias;
