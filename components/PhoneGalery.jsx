import React from 'react'
import BoxWithTitle from './BoxWithTitle'
import styles from '../styles/GaleryPhone.module.css'

export default function PhoneGaleryComponent() {
    return (
        <div className={styles.galery}>
            <BoxWithTitle
                img={'/images/galery/marketing.jpg'}
                title={'Marketing'}
                width={'100%'}
                height={100}
                link={'/portfolio/marketing'}
            ></BoxWithTitle>
            <BoxWithTitle
                img={'/images/galery/ux.jpg'}
                title={'UX'}
                width={'100%'}
                height={100}
                link={'/portfolio/ux'}
            ></BoxWithTitle>
            <BoxWithTitle
                img={'/images/galery/code.jpg'}
                title={'Coding'}
                width={'100%'}
                height={100}
                link={'/portfolio/code'}
            ></BoxWithTitle>
            <BoxWithTitle
                img={'/images/galery/ad.jpg'}
                title={'Advertising'}
                width={'100%'}
                height={100}
                link={'/portfolio/ad'}
            ></BoxWithTitle>
        </div>
    )
}
