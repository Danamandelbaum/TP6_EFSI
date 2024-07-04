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
          <h2 className={styles.h2}>Contactanos</h2>
          <form  className={styles.width} onSubmit={enviar}>
            <label  className={styles.width}><b>Nombre</b></label>
            <input name="nombre" type="text" className={styles.input} placeholder="Ingrese su nombre"value={nombre} onChange={(e) => setNombre(e.target.value)}
            />
            <label className={styles.width}><b>Apellido</b></label>
            <input name="apellido" type="text"  className={styles.input} placeholder="Ingrese su apellido" value={apellido} onChange={(e) => setApellido(e.target.value)}
            />
            <label  className={styles.width}><b>Email</b></label>
            <input name="email" type="text" className={styles.input}  placeholder="Ingrese su email" value={email} onChange={(e) => setEmail(e.target.value)}
            />
            <label className={styles.width}><b>Mensaje</b></label>
            <textarea name="mensaje" className={styles.textarea}  placeholder="Ingrese su mensaje" value={mensaje} onChange={(e) => setMensaje(e.target.value)} ></textarea>
            <button type="submit"  className={styles.primary}>ENVIAR</button>
          </form>
    </div>
    )
}
