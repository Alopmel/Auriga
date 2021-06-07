import React from 'react';
import Navbar from './components/organisms/nav/Navbar';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import { Home } from './components/pages/Home';
import {Alta} from './components/pages/Alta';
import { Personal } from './components/pages/Personal';



  
const App = () => {
  return (

    <>           
        <Router>        
          <Navbar />          
          <Switch>
            <Route exact path='/' component={Home}/>
          </Switch>
          <Switch>
            <Route path='/registro' component={Alta}/>
          </Switch>  
          <Switch>
            <Route path='/area-coches' />
          </Switch>
          <Switch>
            <Route path='/area-personal' component={Personal}/>
          </Switch>
          <Switch>
            <Route path='/mensajes' />
          </Switch>
          <Switch>
            <Route path='/suscripciones' />
          </Switch>
          <Switch>
            <Route path='/contacto' />
          </Switch>
          <Switch>
            <Route path='/cerrar-sesion' />
          </Switch>
        </Router>       
    </>
  );

  
};



export default App;
