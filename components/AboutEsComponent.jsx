import React from 'react'
import styles from '../styles/About.module.css'

export default function AboutComponent({ title }) {
 
  return (
    <div className={styles.about}>
      <div className={styles.title}>{title}</div>
      <div className={styles.text}>🎓 Me gradu&eacute; en 2021.</div>
      <div className={styles.text}>💻 Mientras estaba en la universidad tuve tres trabajos.</div>
      <div className={styles.text}>🐍 Tengo conocimientos en javascript (React, R. Native, Node) y python.</div>
      <div className={styles.text}>✏️ Luego decidí tomar un descanzo en mi carrera, durante el cual estudi&eacute; publicidad.</div>
      <div className={styles.text}>💡 Ahora he vuelto a programar, pero aplicando mi otro lado, m&aacute;s creativo, a mi trabajo.</div>
      <div className={styles.text}>✈️ En otros aspectos de mi vida, amo viajar, y sueño con conocer tantos sitios como pueda, si es posible mientras trabajo.</div>
    </div>
  )
}
