import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import styles from '../styles/Header.module.css'


export default function HeaderComponent({ title, titleLink, callToAction, callToActionLink }) {
  return (
    <header className={styles.header}>
      <Link href={titleLink}>
        <div className={styles.logo}>
          <Image
            src="/images/logo.png"
            alt="Logo"
            width={44}
            height={44}
          />
          <div>{title}</div>
        </div>
      </Link>
      <a href={callToActionLink} target="blank">
        <div className={styles.callToAction}>{callToAction}</div>
      </a>
    </header>
  )
}
