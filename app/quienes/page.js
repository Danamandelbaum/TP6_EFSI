import styles from "./page.module.css";
export default function Quienes({params}){
    return (
    <main className={styles.main}>
      <div className={styles.description}>
        <h1>¡Hola!</h1>
        <h2>Somos Dana y Sasha, estudiantes de 5to Informática en la escuela ORT. Este es nuestro TP número 6 de Estructura y Funcionamiento de los Sistemas Informáticos</h2>
      </div>
    </main>
  );
}

