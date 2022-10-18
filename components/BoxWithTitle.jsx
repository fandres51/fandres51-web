import React from 'react'
import styles from '../styles/Galery.module.css'

export default function BoxWithTitle({ img, title }) {
    return (
        <div
            className={styles.box}
            style={{
                backgroundImage:`url(${img})`,
                backgroundRepeat: 'no-repeat'
            }}>
            <div className={styles.text}>{title}</div>
        </div>
    )
}
