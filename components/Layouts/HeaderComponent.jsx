import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import styles from '../../styles/layouts/Header.module.css'


export default function HeaderComponent() {

  return (
    <header className={styles.header}>
      <Link href={'/'}>
        <div className={styles.logo}>
          <Image
            src="/images/logo.png"
            alt="Logo"
            width={45}
            height={45}
          />
          <div><h1>{'fandres51'}</h1></div>
        </div>
      </Link>
      <nav className={styles.nav}>
        <Link href={'/portfolio'}>
          <div>{'Portfolio'}</div>
        </Link>
        <a href="https://linktr.ee/fandres51" target="_blank">
          Contact Me
        </a>
      </nav>
    </header>
  )
}
