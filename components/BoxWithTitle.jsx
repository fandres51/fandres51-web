import Link from 'next/link'
import React from 'react'
import styles from '../styles/Box.module.css'

export default function BoxWithTitle({ img, title, width, height, link }) {
    return (
        <Link href={link}>
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
                        height: '100%',
                        borderRadius: 10
                    }}
                ></div>
                <div className={styles.text}>{title}</div>
            </div>
        </Link>
    )
}
