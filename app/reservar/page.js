"use client"

import Form from '../components/Form';
import styles from "./page.module.css";
import Citas from '../components/Citas';
import { useEffect, useState } from "react";

export default function Reservar(){
  const [citas, setCitas] = useState(localStorage.getItem("citas") ? JSON.parse(localStorage.getItem("citas")) : []); 

  useEffect(() =>{
    if (citas){
      localStorage.setItem("citas", JSON.stringify(citas));
    }
  }, [citas])
  return (
    <div>
      <h2  className={styles.h2}>Administra tus citas</h2>
      <div  className={styles.one}>
        <Form citas={citas} setCitas={setCitas}/>
      </div>
      <div  className={styles.one}>
        <Citas citas={citas} setCitas={setCitas} />
      </div>
    </div>
    )
}