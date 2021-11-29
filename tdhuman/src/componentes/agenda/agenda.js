import React from 'react';
import styles from '../agenda/Agenda.module.css';

export default function agenda() {
    return (
        <>
            <div className={styles.card}>
                    <div className={styles.leftBlock}>
                        <div className={styles.calendario}>
                            <img className={styles.calendar} src="https://i.imgur.com/WfHyMLb.png"/>
                        </div>
                        <div className={styles.tarefas}>
                        <img className={styles.tasks} src="https://i.imgur.com/sz3mBge.png"/>
                        </div>
                    </div>
                    <div className={styles.rightBlock}>
                    <img className={styles.calendarNotes} src="https://i.imgur.com/sXrvu11.png"/>
                    </div>
            </div>
            
        </>
    )
}
