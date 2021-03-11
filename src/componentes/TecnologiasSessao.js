import '../css/TecnologiasSessao.css';

function TecnologiasSessao(props){
    const style = {
        width: props.porcentagem,
      };
    return(
        <section className="TecSession">
            <div>
                <img src={props.imagem} alt=" "></img>
            </div>
            <div>
                <h2>Domínio:</h2>
                <div> <span style={style}> </span> </div>
            </div>
        </section>
    );
}

export default TecnologiasSessao;