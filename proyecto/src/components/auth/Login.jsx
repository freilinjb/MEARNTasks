import React, { useState } from 'react';
import { Link } from 'react-router-dom';



const Login = () => {

    //State para iniciar sesion
    const [usuario, setUsuario] = useState({
        email:'',
        password:''
    });

    //extraer del usuario

    const { email, password } = usuario; 

    const onChange = e => {
        setUsuario({
            ...usuario,
            [e.target.name] : e.target.value
        });
    }

    //Cuandl el usuario quere iniciaonSubmitr sesion
    const onSubmit =e=> {
        e.preventDefault();

        //validar campos

        //Pasarlo al action
    }
    return ( 
        <div className="form-usuario">
            <div className="contenedor-form sombra-dark">
                <h1>Iniciar Sesion</h1>
                <form onSubmit={onSubmit}>
                    <div className="campo-form">
                        <label htmlFor="">Email</label>
                        <input 
                            type="text" 
                            name="email" 
                            className="form-control" 
                            placeholder="Tu email"
                            value={email}
                            onChange={onChange}
                        />
                    </div> 
                    <div className="campo-form">
                        <label htmlFor="">Password</label>
                        <input 
                            type="password" 
                            name="password" 
                            className="form-control" 
                            placeholder="Tu password"
                            value={password}
                            onChange={onChange}
                        />
                    </div> 
                    <input type="submit" value="Iniciar Sesion" className="btn btn-primario btn-block"/>
                </form>
                <Link to={'/nueva-cuenta'} className="enlace-cuenta">
                    Obtener Cuenta
                </Link>
            </div>
        </div>
     );
}
 
export default Login;