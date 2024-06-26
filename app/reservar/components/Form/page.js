import styles from "./page.module.css";
"use client";
import React, { useState } from 'react';
export default function Form(){
    const [mascota, setMascota] = useState('');
    const [propietario, setPropietario] = useState('');
    const [fecha, setFecha] = useState('');
    const [hora, setHora] = useState('');
    const [sintomas, setSintomas] = useState('');

    const agregarCita = (e) => {
      e.preventDefault();
      
      if (!mascota || !propietario || !fecha || !hora || !sintomas) {
        alert('Todos los campos son obligatorios');
        return;
      }

      if (!window.confirm('¿Desea agregar esta cita?')) {
        return;
      }
      //ES LO MISMO QUE UN ALERT PERO PARA CONFIRMAR

      setCitas([...citaS, { mascota, propietario, fecha, hora, sintomas }]);
      setMascota('');
      setPropietario('');
      setFecha('');
      setHora('');
      setSintomas('');
    }
    return (
        <div className="one-half column">
        <div className="onn">
          <h2>Crear mi Cita</h2>
          <form className="u-full-width" onSubmit={agregarCita}>
            <label className="u-full-width"><b>Nombre Mascota</b></label>
            <input name="mascota" type="text" className="u-full-width" placeholder="Nombre Mascota"value={mascota} onChange={(e) => setMascota(e.target.value)}
            />
            <label className="u-full-width"><b>Nombre Dueño</b></label>
            <input name="propietario" type="text" className="u-full-width" placeholder="Nombre dueño de la mascota" value={propietario} onChange={(e) => setPropietario(e.target.value)}
            />
            <label className="u-full-width"><b>Fecha</b></label>
            <input name="fecha" type="date" className="u-full-width" value={fecha} onChange={(e) => setFecha(e.target.value)}
            />
            <label className="u-full-width"><b>Hora</b></label>
            <input name="hora" type="time" className="u-full-width" value={hora} onChange={(e) => setHora(e.target.value)}
            />
            <label className="u-full-width"><b>Sintomas</b></label>
            <textarea name="sintomas"className="u-full-width" value={sintomas} onChange={(e) => setSintomas(e.target.value)} ></textarea>
            <button type="submit" className="u-full-width button-primary">AGREGAR CITA</button>
          </form>
        </div>
      </div>
    )
}
