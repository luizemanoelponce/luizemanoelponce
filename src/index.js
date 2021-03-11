import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import Home from './paginas/Home';
import Tecnologias from './paginas/Tecnologias';
import Projetos from './paginas/Projetos';
import Sobre from './paginas/Sobre';

import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Switch>
        <Route path="/" exact={true} component={Home} />
        <Route path="/tecnologias" component={Tecnologias} />
        <Route path="/projetos" component={Projetos} />
        <Route path="/sobre" component={Sobre} />
      </Switch>
    </BrowserRouter>

  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
