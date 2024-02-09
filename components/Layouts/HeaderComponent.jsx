import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import styles from '../../styles/layouts/Header.module.css'


export default function HeaderComponent() {

  return (
    <div>
      <header className={styles.header}>
        <Link href={'/'}>
          <div className={styles.logo}>
            <Image
              src="/images/logo.png"
              alt="Logo"
              width={45}
              height={45}
            />
            <div><h2>{'fandres51'}</h2></div>
          </div>
        </Link>
        <nav className={styles.nav}>
          <Link href={'/blog'}>
            <div>{'Blog'}</div>
          </Link>
          <a href="https://github.com/fandres51" target="blank">
            Contact Me
          </a>
        </nav>
      </header>
      <div style={{ // Line separator
        width: '100%',
        borderTop: '1px solid #e0e0e0',
      }}></div>
    </div>
  )
}
