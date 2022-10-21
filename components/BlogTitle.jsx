import React from 'react'
import styles from '../styles/BlogTitle.module.css'

export default function BlogTitle({ img, title, width, height }) {
    return (
        <div
            className={styles.box}
            style={{
                width: width,
                height: height
            }}>
            <div
                className={styles.image}
                style={{
                    backgroundImage: `url(${img})`,
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center center',
                    width: '100%',
                    height: '100%'
                }}
            ></div>
            <div className={styles.text}>{title}</div>
        </div>
    )
}
