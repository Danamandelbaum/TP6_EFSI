"use client"

import Form from '../components/Form';
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
      <div className="one-half column">
        <Form citas={citas} setCitas={setCitas}/>
      </div>
      <div className="one-half column">
        <Citas citas={citas} setCitas={setCitas} />
      </div>
    </div>
    )
}