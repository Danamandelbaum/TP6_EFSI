"use client";
import styles from "./cita.module.css";


function Cita({ index, mascota, propietario, fecha, hora, sintomas, citas, setCitas }) {
  const eliminarCita = () => {
    if (window.confirm('¿Desea eliminar esta cita?')) {
      setCitas(citas.filter((c, i) => i !== index));
      //HACE UN NUEVO ARRAY CON TODAS LAS CITAS MENOS LA QUE TENGA EL INDICE DE LA QUE QUEREMOS BORRAR
    }
  }

  return (
    <div className={styles.cita}>
      <p>Mascota: <span>{mascota}</span></p>
      <p>Dueño: <span>{propietario}</span></p>
      <p>Fecha: <span>{fecha}</span></p>
      <p>Hora: <span>{hora}</span></p>
      <p>Sintomas: <span>{sintomas}</span></p>
      <button onClick={eliminarCita} className={styles.eliminar} >ELIMINAR x</button>
    </div>
  );
}

export default Cita;
