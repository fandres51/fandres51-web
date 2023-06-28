import React from 'react'
import styles from '../../styles/layouts/Footer.module.css'
import { BsInstagram, BsLinkedin, BsGithub, BsBehance, BsTiktok } from 'react-icons/bs';
import { FiMail } from 'react-icons/fi';

export default function FooterComponent() {
    return (
        <footer className={styles.footer}>
            <div style={{ // Line separator
                width: '100%',
                borderTop: '1px solid #e0e0e0',
            }}></div>
            <div className={styles.content}>
                <div className={styles.iconsBox}>
                    <a href="https://instagram.com/fandres51" target="blank"><BsInstagram size={40} color='#545452' /></a>
                    <a href="https://github.com/fandres51" target="blank"><BsGithub size={40} color='#545452' /></a>
                    {/* <a href="mailto:fabio.and1514@gmail.com" target="blank"><FiMail size={40} color='#545452' /></a> */}
                    <a href="https://linkedin.com/in/fabio-andres-enriquez-476692194/" target="blank"><BsLinkedin size={40} color='#545452' /></a>
                    <a href="https://behance.net/fandres51" target="blank"><BsBehance size={40} color='#545452' /></a>
                    {/* <a href="https://github.com/fandres51" target="blank"><BsTiktok size={40} color='#545452' /></a> */}
                </div>
            </div>
            <div className={styles.copyright}>Copyright © 2023 fandres51</div>
        </footer>
    )
}
