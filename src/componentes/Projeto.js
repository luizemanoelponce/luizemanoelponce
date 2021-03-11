import '../css/Projeto.css';
import Botao from '../componentes/Botao';

function Projeto(props){

    return(
        <section className="Projeto">
            <div>
                <img src={props.imagem} alt=" "></img>
            </div>
            <div>
                <h2>{props.nome}</h2>
                <p>{props.descricao}</p>
                <div>
                    <Botao link={props.link} texto="Ir para Github"></Botao>
                </div>
            </div>
        </section>
    );
}

export default Projeto;