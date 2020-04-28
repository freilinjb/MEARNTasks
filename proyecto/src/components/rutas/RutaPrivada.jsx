import React,{useContext, useEffect} from 'react';
import {Route, Redirect} from 'react-router-dom';
import AuthContext from '../../context/autenticacion/authContext';

//Eso dice que este componente va a tener otro componente dentro
const RutaPrivada = ({component: Component, ...props}) => {

    const authContext = useContext(AuthContext);
    const {autenticado }  = authContext;

    return (
        <Route {...props} render={ props => !autenticado ? 
        (
            // //Lo envia a la pagina principal 
            // //Si no esta autenticado lo redirecciona
            <Redirect to="/"/>
        ) :
        (
            // //Implicito
            <Component {...props} />
        ) }/>
      );
}
 
export default RutaPrivada;
