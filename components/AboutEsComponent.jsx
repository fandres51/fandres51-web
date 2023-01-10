import React from 'react'
import styles from '../styles/About.module.css'

export default function AboutComponent({ title }) {
  const aboutText =
    `
  🎓 I graduated in 2021.
  💻 While at the university I had three jobs.
  🐍 My knowledge includes javascript (React, Native, Node) and python.
  ✏️ Then I decided to take a career break, so I started to learn publicity.
  💡 Now I'm back to code but using my other, more creative side, for all my work.
  ✈️ In other aspects of my life, I love to travel and discover new places and people. My dream is to visit as many places as I can, maybe while working.
  `
  return (
    <div className={styles.about}>
      <div className={styles.title}>{title}</div>
      <div className={styles.text}>🎓 Me gradué en 2021.</div>
      <div className={styles.text}>💻 Mientras estaba en la universidad tuve tres trabajos.</div>
      <div className={styles.text}>🐍 Tengo conocimientos en javascript (React, R. Native, Node) y python.</div>
      <div className={styles.text}>✏️ Luego decidí tomar un descanzo en mi carrera, durante el cual estudié publicidad.</div>
      <div className={styles.text}>💡 Ahora he vuelto a programar, pero aplicando mi otro lado, más creativo, a mi trabajo.</div>
      <div className={styles.text}>✈️ En otros aspectos de mi vida, amo viajar, y sueño con conocer tantos sitios como pueda, si es posible mientras trabajo.</div>
    </div>
  )
}
