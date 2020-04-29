import React, {useReducer} from 'react';
import TareaContext from './tareaContext'
import TareaReducer from './tareaReducer';
import clienteAxios from '../../config/axios';

import {
    TAREAS_PROYECTO, 
    AGERGAR_TAREAS,
    VALIDAR_TAREA,
    ELIMINAR_TAREA,
    ESTADO_TAREA,
    TAREA_ACTUAL,
    ACTUALIZAR_TAREA,
    LIMPIAR_TAREA
} from '../../types';

const TareaState = props => {
    const initialState = {
        tareasproyecto: [], //para cuando el usuario seleccione una tarea
        errortarea: false,
        tareaseleccionada: null
    }

    //crear dispath y state
    const [state, dispatch] = useReducer(TareaReducer, initialState);

    //Crear las funciones

    //Obtener las tareas de un proyecto
    const obtenerTareas = async proyecto => {
        //Cuando se seleccione un proyecto se ejecuta esto
        console.log(proyecto);
        
        try {                                           //De esta forma la llave y el valor seran iguales
            const resultado = await clienteAxios.get('api/tareas',{ paramns : {proyecto}})
            dispatch({
                type: TAREAS_PROYECTO
            });
        } catch (error) {
            console.log(error);
            
        }
    }

    //Agregar una tarea al proyecto seleccionado
    const agrergarTarea = async tarea => {
        console.log(tarea);
        
        try {
            const resultado = await clienteAxios.post('/api/tareas', tarea);
            console.log(resultado);
            
            dispatch({
                type:AGERGAR_TAREAS,
                payload: tarea
            });
        } catch (error) {
            console.log(error);
            
        }
    }

    //validar y mostrar un error en caso de que sea necesario
    const validarTarea = () => {
        dispatch({
            type:VALIDAR_TAREA
        });
    }

    const eliminarTarea = id => {
        dispatch({
            type: ELIMINAR_TAREA,
            payload: id
        });
    }

    //Cambia el estado de cada tarea
    const cambiarEstadoTarea = tarea => {
        dispatch({
            type: ESTADO_TAREA,
            payload: tarea
        }); 
    }

    //Extrae una tarea para edicion
    const guardarTareaActual = tarea => {
        dispatch({
            type: TAREA_ACTUAL,
            payload: tarea
        });
    }

    //Editar o modifica una tarea
    const actualizarTarea = tarea => {
        dispatch({
            type: ACTUALIZAR_TAREA,
            payload: tarea
        });
    }

    //Elimina la tarea seleccionada
    const limpiarTarea=() => {
        dispatch({
            type: LIMPIAR_TAREA
        })
    }

    return (
        <TareaContext.Provider
            value={{
                tareasproyecto: state.tareasproyecto,
                errortarea: state.errortarea,
                tareaseleccionada: state.tareaseleccionada,
                obtenerTareas,
                agrergarTarea,
                validarTarea,
                eliminarTarea,
                cambiarEstadoTarea,
                guardarTareaActual,
                actualizarTarea,
                limpiarTarea
            }}>
            {props.children}
        </TareaContext.Provider>
    )
}

export default TareaState;