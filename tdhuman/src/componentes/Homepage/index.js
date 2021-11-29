import React from "react";
import styles from './homepage.module.css';
import Botao from "../Botao/botao";

export default function Homepage(){
    return(
        <>
            <div>
                <img src="https://i.imgur.com/f6ZygqF.png" />
            </div>

            <div className={styles.container}>
                <div className={styles.containerCards}>

                    <div className={styles.linha}>

                        <div className={styles.card}>
                            <img src='https://i.imgur.com/IyKQYLA.png' alt='' />
                            <p className={styles.texto}>PAINEL DE SAÚDE</p>
                        </div>

                        <div className={styles.card}>
                            <img src='https://i.imgur.com/fmR27eP.png' alt='' />
                            <p className={styles.texto}>EXERCÍCIOS DE RESPIRAÇÃO</p>
                        </div>

                        <div className={styles.card}>
                            <img src='https://i.imgur.com/JsBoki8.png' alt='' />
                            <p className={styles.texto}>AGENDA</p>
                        </div>

                    </div>

                    {/* <div className={styles.linha}>

                        <div className={styles.card}>
                            <img src='https://i.imgur.com/JbcP1Kk.png' alt='' />
                            <p>Régua das emoções</p>
                        </div>

                        <div className={styles.card}>
                            <img src='https://i.imgur.com/JbcP1Kk.png' alt='' />
                            <p>Régua das emoções</p>
                        </div>

                        <div className={styles.card}>
                            <img src='https://i.imgur.com/JbcP1Kk.png' alt='' />
                            <p>Régua das emoções</p>
                        </div>

                    </div> */}
                
                </div>

                <div>
                <img src="https://i.imgur.com/sz3mBge.png" />
                </div>
            </div>

            <Botao />

            <section>
                <div className={styles.skewed}>
                </div>
            </section>

            
            

        </>
    )
}