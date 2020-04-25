import React from 'react';
import Sidebar from '../layout/Sidebar';
import Barra from '../layout/Barra';
import FormTarea from '../tareas/FormTarea';
import LIstadoTareas from '../tareas/LIstadoTareas';

const Proyectos = () => {
    return ( 
        <div className="contenedor-app">
            <Sidebar/>

        {/* Administrar nuestras tareas */}
            <div className="seccion-principal">
                <Barra/>
                <main>
                    <FormTarea/>
                    <div className="contenedor-tareas">
                        <LIstadoTareas/>
                    </div>
                </main>
            </div>
        </div>
     );
}
 
export default Proyectos;