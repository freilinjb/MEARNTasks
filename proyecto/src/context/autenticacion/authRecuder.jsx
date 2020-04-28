import {
    REGISTRO_EXITOSO, 
    REGISTRO_ERROR,
    OBTENER_USUARIO,
    LOGIN_EXITOSO,
    LOGIN_ERROR,
    CESSAR_SESION
} from '../../types/index';


export default (state, action) => {
    switch(action.type) {
        case CESSAR_SESION:
            return {
                alerta: action.payload
            }
            //No hay state porque solo habra alerta en el Context
        case LOGIN_ERROR: 
            return{
                alerta: null
            }
        default:
            return state;
    }
}