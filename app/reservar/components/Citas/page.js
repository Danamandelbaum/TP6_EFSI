import './citas.css';
import React from 'react';
import Cita from '../Cita/cita.js';
import styles from "./page.module.css";

export const Citas = ({ citas, setCitas }) => {
  return (
    <div>
      <h2>Administra tus citas</h2>
      <div className="citas">
        {citas.map((c, index) => (
          <Cita
            index={index}
            mascota={c.mascota}
            propietario={c.propietario}
            fecha={c.fecha}
            hora={c.hora}
            sintomas={c.sintomas}
            citaS={citas}
            setCitaS={setCitas}
          />
        ))}
      </div>
    </div>
  );
}

export default Citas;
