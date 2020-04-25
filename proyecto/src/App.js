import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './components/auth/Login';
import NuevaCuenta from './components/auth/NuevaCuenta';
import Proyectos from './components/proyectos/Proyectos';

import ProyectoState from './context/proyectos/ProyectoState';
import TareaState from './context/tareas/tareaState';

function App() {
  return (
    <ProyectoState>
      <TareaState>
        {/* para que los diferentes props y las diferentes funciones se pasen en todo el state */}
        <Router>
          {/* Todo lo que este por fuera es lo que se va a ver en toda la pagina */}
          <Switch>
            <Route exact path="/" component={Login}/>
            <Route exact path="/nueva-cuenta" component={NuevaCuenta}/>
            <Route exact path="/proyectos" component={Proyectos}/>
          </Switch>
        </Router>
      </TareaState>
    </ProyectoState>
  );
}

export default App;
 