import React,{useReducer} from 'react';
import alertaReducer from './alertaReducer';
import alertaContext from './alertaContext';

import {MOSTRAR_ALERTA, OCULTAR_ALERTA} from '../../types/index';

const AlertaState = props => {
    const initialState = {
        alerta:null
    }
    //useReducer toma el Redurer y el state inicial
    const [state, dispatch] = useReducer(alertaReducer, initialState);


    const mostrarAlerta = (msg, categoria) => {
        dispatch({
            type: MOSTRAR_ALERTA,
            payload: {
                //login literarl de JS
                msg,
                categoria
            }
        });
//TIEMPO QUE OCULTA LA ALERTA
        setTimeout(() => {
            dispatch({
                type: OCULTAR_ALERTA
            })
        },5000);
    }

    return (
        <alertaContext.Provider
            value={{
                alerta: state.alerta,
                mostrarAlerta
            }}
        >
            {props.children}
        </alertaContext.Provider>
    )
}

export default AlertaState;