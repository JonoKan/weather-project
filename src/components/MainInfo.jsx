import React from 'react'
import styles from "./MainInfo.module.css"

export default function MainInfo({data}) {
    if (!data) {
        return;
    }
    return(
        <div className={styles.mainInfo}>
            <h2 className={styles.gridItem}>{data.current.condition.text}</h2>
            <h1 className={styles.gridItem}>{data.current.temp_c}°C</h1>
            <h2 className={styles.gridItem}>{data.location.name}</h2>
            <h3 className={styles.gridItem}>{data.location.localtime}</h3>
        </div>
    )
};
