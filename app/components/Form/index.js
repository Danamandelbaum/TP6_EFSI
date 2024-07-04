"use client";
import styles from "./form.module.css";
import React, { useState } from 'react';

export default function Form({ citas, setCitas }){
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

      setCitas([...citas, { mascota, propietario, fecha, hora, sintomas }]);
      setMascota('');
      setPropietario('');
      setFecha('');
      setHora('');
      setSintomas('');
    }
    return (
        <div  className={styles.one}>
        <div  className={styles.onn}>
          <h2>Crear mi Cita</h2>
          <form  className={styles.width} onSubmit={agregarCita}>
            <label  className={styles.label}><b>Nombre Mascota</b></label>
            <input name="mascota" type="text"  className={styles.input} placeholder="Nombre Mascota"value={mascota} onChange={(e) => setMascota(e.target.value)}
            />
            <label  className={styles.label}><b>Nombre Dueño</b></label>
            <input name="propietario" type="text" className={styles.input} placeholder="Nombre dueño de la mascota" value={propietario} onChange={(e) => setPropietario(e.target.value)}
            />
            <label  className={styles.label}><b>Fecha</b></label>
            <input name="fecha" type="date" className={styles.input} value={fecha} onChange={(e) => setFecha(e.target.value)}
            />
            <label className={styles.label}><b>Hora</b></label>
            <input name="hora" type="time"  className={styles.input} value={hora} onChange={(e) => setHora(e.target.value)}
            />
            <label className={styles.label}><b>Sintomas</b></label>
            <textarea name="sintomas" className={styles.textarea} value={sintomas} onChange={(e) => setSintomas(e.target.value)} ></textarea>
            <button type="submit" className={styles.primary}>AGREGAR CITA</button>
          </form>
        </div>
      </div>
    )
}
