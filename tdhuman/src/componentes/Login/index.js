import React from "react";
import styles from './Login.module.css';

export default function Login(){
    return(
        <>
        <div>
            <p>Login</p>

            <form>
                <input type="email" id="email" name="email" placeholder="Email" />
                <br />
                <input type="password" id="senha" name="senha" placeholder="Senha" />
                <br />
                <input type="submit" value="Enviar" />
            </form>

            

            <p>Cadastre-se aqui</p>
        </div>

        </>
    )
}