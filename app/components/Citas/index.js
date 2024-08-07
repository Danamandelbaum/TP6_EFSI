"use client";
import React from 'react';
import Cita from '../Cita';
import styles from "./citas.module.css";

export const Citas = ({ citas, setCitas }) => {
  
  return (
    <div>
      <div  className={styles.citas}>
        {citas.map((c, index) => (
          <Cita
            index={index}
            mascota={c.mascota}
            propietario={c.propietario}
            fecha={c.fecha}
            hora={c.hora}
            sintomas={c.sintomas}
            citas={citas}
            setCitas={setCitas}
          />
        ))}
      </div>
    </div>
  );
}

export default Citas;
