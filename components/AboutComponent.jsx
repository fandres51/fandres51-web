import React from 'react'
import styles from '../styles/About.module.css'

export default function AboutComponent({ title }) {
 
  return (
    <div className={styles.about}>
      <div className={styles.title}>{title}</div>
      <div className={styles.text}>🎓 I graduated in 2021.</div>
      <div className={styles.text}>💻 While at the university, I worked in some different intership jobs.</div>
      <div className={styles.text}>🐍 My knowledge includes JavaScript (React, React Native, NodeJS), python, and UX design.</div>
      <div className={styles.text}>✏️ Then I decided to take a career break, so I started to learn publicity.</div>
      <div className={styles.text}>💡 Now I&apos;m back to code and UX design using creativity and reasoning in my work.</div>
      <div className={styles.text}>✈️ In other aspects of my life, I love to travel and discover new places and people. My dream is to visit as many places as I can, maybe while working.</div>
    </div>
  )
}
