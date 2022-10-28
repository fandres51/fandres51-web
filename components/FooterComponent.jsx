import React from 'react'
import styles from '../styles/Footer.module.css'
import { BsInstagram, BsTwitter, BsLinkedin, BsGithub, BsBehance } from 'react-icons/bs';

export default function FooterComponent({title}) {
    return (
        <footer className={styles.footer}>
            <div className={styles.content}>
                <div className={styles.phrase}>{title}</div>
                <div className={styles.iconsBox}>
                    <a href="https://instagram.com/fandres51" target="blank"><BsInstagram size={25} color='white'/></a>
                    <a href="https://twitter.com/fandres51" target="blank"><BsTwitter size={25} color='white'/></a>
                    <a href="https://linkedin.com/in/fabio-andres-enriquez-476692194/" target="blank"><BsLinkedin size={25} color='white'/></a>
                    <a href="https://github.com/fandres51" target="blank"><BsGithub size={25} color='white'/></a>
                    <a href="https://behance.net/fandres51" target="blank"><BsBehance size={25} color='white'/></a>
                </div>
            </div>
            <div className={styles.copyright}>Copyright © 2022 fandres51</div>
        </footer>
    )
}
