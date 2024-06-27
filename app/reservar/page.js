"use client"

import Form from '../components/Form';
import Citas from '../components/Citas';
import { useState } from "react";

export default function Reservar(){
  const [citas, setCitas] = useState([]); 

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