import React from 'react'
import BoxWithTitle from './BoxWithTitle'
import styles from '../styles/Galery.module.css'
import Router from 'next/router'

export default function GaleryComponent({title1, title2, title3, title4}) {
  return (
    <div className={styles.galery}>
      <div>
        <BoxWithTitle
          img={'/images/galery/marketing.jpg'}
          title={title1}
          width={450}
          height={250}
          link={'https://behance.net/fandres51'}
        ></BoxWithTitle>
        <BoxWithTitle
          img={'/images/galery/ux.jpg'}
          title={title2}
          width={250}
          height={250}
          link={'https://behance.net/fandres51'}
        ></BoxWithTitle>
      </div>
      <div>
        <BoxWithTitle
          img={'/images/galery/code.jpg'}
          title={title3}
          width={250}
          height={250}
          link={'https://behance.net/fandres51'}
        ></BoxWithTitle>
        <BoxWithTitle
          img={'/images/galery/ad.jpg'}
          title={title4}
          width={450}
          height={250}
          link={'https://behance.net/fandres51'}
        ></BoxWithTitle>
      </div>
    </div>
  )
}
