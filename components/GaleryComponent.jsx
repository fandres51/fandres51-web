import React from 'react'
import BoxWithTitle from './BoxWithTitle'
import styles from '../styles/Galery.module.css'

export default function GaleryComponent() {
  return (
    <div className={styles.galery}>
      <div>
        <BoxWithTitle
          img={'/images/galery/marketing.jpg'}
          title={'Marketing'}
          width={450}
          height={230}
          link={'/portfolio/marketing'}
        ></BoxWithTitle>
        <BoxWithTitle
          img={'/images/galery/ux.jpg'}
          title={'UX'}
          width={250}
          height={230}
          link={'/portfolio/ux'}
        ></BoxWithTitle>
      </div>
      <div>
        <BoxWithTitle
          img={'/images/galery/code.jpg'}
          title={'Coding'}
          width={250}
          height={230}
          link={'/portfolio/code'}
        ></BoxWithTitle>
        <BoxWithTitle
          img={'/images/galery/ad.jpg'}
          title={'Advertising'}
          width={450}
          height={230}
          link={'/portfolio/ad'}
        ></BoxWithTitle>
      </div>
    </div>
  )
}
