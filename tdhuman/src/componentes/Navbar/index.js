import React from "react";
import styles from './Navbar.module.css';

export default function Login(){

    return(
        <>
        <header className={styles.header}>
        <div className={styles.logo}>
            <img className={styles.logo2} src="https://i.imgur.com/ZDqL8bq.png" />
        </div>
    <ul className={styles.ul}>
      <li className={styles.li}><a className={styles.a} href="">Homepage</a></li>
      <li className={styles.li}><a className={styles.a} href="">Agenda</a></li>
      <li className={styles.li}><a className={styles.a} href="">Painel da saúde</a></li>
      <li className={styles.li}><a className={styles.a} href=""></a></li>
    </ul>
    <div Name={styles.toogle}onclick="toogle()"></div>
  </header>
        </>
    )
}