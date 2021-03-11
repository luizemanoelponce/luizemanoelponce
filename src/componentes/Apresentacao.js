import '../css/Apresentacao.css';

function Apresentacao(props){
    return(
        <section>
            <h1>
                Luiz Emanoel
            </h1>
            <p>
                {props.text}
            </p>           
        </section>
    );
}

export default Apresentacao;