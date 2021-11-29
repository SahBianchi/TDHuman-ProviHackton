import React from "react";
import styles from './Login.module.css';

export default function Login(){
    return(
        <div className={styles.container}>
        <div className={styles.borda}>
            <p className={styles.titulo}>Login</p>

            <form>
                <input className={styles.input} type="email" id="email" name="email" placeholder="Email" />
                <br />
                <input className={styles.input} type="password" id="senha" name="senha" placeholder="Senha" />
                <br />
                <button className={styles.botao} type="submit">Enviar</button>
                {/* <input className={styles.botao} type="submit" value="Enviar" /> */}
            </form>      

            <a className={styles.cadastro} href="#">Cadastre-se aqui</a>
        </div>

        </div>
    )
}