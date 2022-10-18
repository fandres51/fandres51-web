import React from 'react'
import styles from '../styles/About.module.css'

export default function AboutComponent({title, text}) {
  return (
    <div className={styles.about}>
        <div className={styles.title}>{title}</div>
        <div className={styles.text}>{text}</div>
    </div>
  )
}
