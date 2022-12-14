import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import styles from '../styles/Banner.module.css'

export default function BannerComponent({ message, buttonMessage, buttonAction }) {
    return (
        <div className={styles.banner}>
            <div className={styles.text}>
                <div className={styles.message}>{message}</div>
                <a style={{textDecoration:"none"}} href={buttonAction} target="blank">
                    <div className={styles.button}>{buttonMessage}</div>
                </a>
            </div>
            <div className={styles.flexBalance}></div>
            <div className={styles.bannermobile}>
                <Image
                    src="/images/banner-phone.png"
                    alt="Profile Picture"
                    width={400}
                    height={400}
                />
            </div>
        </div>
    )
}
