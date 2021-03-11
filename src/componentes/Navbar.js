import '../css/Navbar.css';
import { Link } from 'react-router-dom';
import React from 'react';

class Navbar extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      classe: 'pages',
    }
  }

  handleClick(){
    const estado = this.state.classe.slice();

    if( estado === 'pages'){
      this.setState({
        classe: 'responsivo'
      })
    } else {
      this.setState({
        classe: 'pages'
      })
    }
  }
  
  render(){
    return (
      <header>
        <nav>
          <div className="branding">
            luizemanoel<span>.</span>dev
          </div>
          <div className="navLinks">
          <button onClick={ () => this.handleClick() } className="button-menu" id="menu-responsivo">
              <span>
                |||
              </span>
            </button>
            <Link to="/" className={this.state.classe} >Home</Link>
            <Link to="/tecnologias" className={this.state.classe} >Tecnologias</Link>
            <Link to="/projetos" className={this.state.classe} >Projetos</Link>
            <Link to="/sobre" className={this.state.classe} >Sobre</Link>
          </div>
        </nav>
      </header>
    );
  }
}

export default Navbar;
