import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from './components/estaticos/navbar/NavBar';
import Footer from './components/estaticos/footer/Footer';
import CadastroUsuario from "./paginas/cadastroUsuario/CadastroUsuario";
import { Grid } from '@material-ui/core';
import Home from "./paginas/home/Home";
import Login from "./paginas/login/Login";
import './App.css';


function App() {
  return (
    <>
        <Router>
          <NavBar />
            <Switch>
              <div style = {{minHeight: "100vh" }}>

              <Route exact path = "/">
                  <Login />
                </Route>

              <Route path = "/login">
                  <Login />
                </Route>

                <Route path = "/home">
                  <Home />
                </Route>

                <Route path = "/cadastrousuario">
                  <CadastroUsuario />
                </Route>
                
              </div>
            </Switch>
          <Footer/>
        </Router>

    </>

    
  );
}

export default App;