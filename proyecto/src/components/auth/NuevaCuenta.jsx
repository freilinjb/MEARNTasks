import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const NuevaCuenta = () => {

    //State para iniciar sesion
    const [usuario, setUsuario] = useState({
        nombre: '',
        email:'',
        password:'',
        confirmar:''
    });

    //extraer del usuario

    const { nombre, email, password, confirmar } = usuario; 

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

        //Password minimo de 6 caracteres

        //Los 2 password son iguales

        //Pasarlo al action
    }
    return ( 
        <div className="form-usuario">
            <div className="contenedor-form sombra-dark">
                <h1>Obtener una cuenta</h1>
                <form onSubmit={onSubmit}>
                    <div className="campo-form">
                        <label htmlFor="">Nombre</label>
                        <input 
                            type="text" 
                            name="nombre" 
                            className="form-control" 
                            placeholder="Tu Nombre"
                            value={nombre}
                            onChange={onChange}
                        />
                    </div> 

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

                    <div className="campo-form">
                        <label htmlFor="">Confirmar Password</label>
                        <input 
                            type="password" 
                            name="confirmar"
                            className="form-control" 
                            placeholder="Repite Password"
                            value={confirmar}
                            onChange={onChange}
                        />
                    </div> 
                    <input type="submit" value="Registrarme" className="btn btn-primario btn-block"/>
                </form>
                <Link to={'/'} className="enlace-cuenta">
                    Volver a iniciar Sesion
                </Link>
            </div>
        </div>
     );
}
 
export default NuevaCuenta;