import '../css/Botao.css';

function Botao(props){
    return(
        <a href={props.link} target="__blank" className="Botao">
            {props.texto}
        </a>
    );
}

export default Botao;