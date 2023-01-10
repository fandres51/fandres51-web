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
      <div className={styles.text}>🎓 I graduated in 2021.</div>
      <div className={styles.text}>💻 While at the university I had three jobs.</div>
      <div className={styles.text}>🐍 My knowledge includes javascript (React, R. Native, Node) and python.</div>
      <div className={styles.text}>✏️ Then I decided to take a career break, so I started to learn publicity.</div>
      <div className={styles.text}>💡 Now I'm back to code but using my other, more creative side, for all my work.</div>
      <div className={styles.text}>✈️ In other aspects of my life, I love to travel and discover new places and people. My dream is to visit as many places as I can, maybe while working.</div>
    </div>
  )
}
