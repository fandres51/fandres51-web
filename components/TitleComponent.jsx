import React from 'react'
import styles from '../styles/Title.module.css'

export default function TitleComponent({title, align}) {
  return (
    <div 
      className={styles.title}
      style={{textAlign:align}}
    >{title}</div>
  )
}
