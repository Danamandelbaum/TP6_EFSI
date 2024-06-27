"use client";
import styles from "./page.module.css";
import React, { useState } from 'react';

export default function Ayuda(){
    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [email, setEmail] = useState('');
    const [mensaje, setMensaje] = useState('');
    
    const enviar = () => {
        if (!nombre || !apellido || !email || !mensaje) {
            alert('Todos los campos son obligatorios');
            return;
        }
        if (!window.confirm('¿Desea mandar este mensaje?')) {
            return;
        }
    setNombre('');
    setApellido('');
    setEmail('');
    setMensaje('');
    }

    return (
        <div>
          <h2>Contactanos</h2>
          <form className="u-full-width" onSubmit={enviar}>
            <label className="u-full-width"><b>Nombre</b></label>
            <input name="nombre" type="text" className="u-full-width" placeholder="Ingrese su nombre"value={nombre} onChange={(e) => setNombre(e.target.value)}
            />
            <label className="u-full-width"><b>Apellido</b></label>
            <input name="apellido" type="text" className="u-full-width" placeholder="Ingrese su apellido" value={apellido} onChange={(e) => setApellido(e.target.value)}
            />
            <label className="u-full-width"><b>Email</b></label>
            <input name="email" type="text" className="u-full-width"  placeholder="Ingrese su email" value={email} onChange={(e) => setEmail(e.target.value)}
            />
            <label className="u-full-width"><b>Mensaje</b></label>
            <textarea name="mensaje"className="u-full-width"  placeholder="Ingrese su mensaje" value={mensaje} onChange={(e) => setMensaje(e.target.value)} ></textarea>
            <button type="submit" className="u-full-width button-primary">ENVIAR</button>
          </form>
    </div>
    )
}
