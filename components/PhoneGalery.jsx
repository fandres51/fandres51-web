import React from 'react'
import BoxWithTitle from './BoxWithTitle'
import styles from '../styles/GaleryPhone.module.css'

export default function PhoneGaleryComponent({title1, title2, title3, title4}) {
    return (
        <div className={styles.galery}>
            <BoxWithTitle
                img={'/images/galery/marketing.jpg'}
                title={title1}
                width={'100%'}
                height={100}
                link={'https://behance.net/fandres51'}
            ></BoxWithTitle>
            <BoxWithTitle
                img={'/images/galery/ux.jpg'}
                title={title2}
                width={'100%'}
                height={100}
                link={'https://behance.net/fandres51'}
            ></BoxWithTitle>
            <BoxWithTitle
                img={'/images/galery/code.jpg'}
                title={title3}
                width={'100%'}
                height={100}
                link={'https://behance.net/fandres51'}
            ></BoxWithTitle>
            <BoxWithTitle
                img={'/images/galery/ad.jpg'}
                title={title4}
                width={'100%'}
                height={100}
                link={'https://behance.net/fandres51'}
            ></BoxWithTitle>
        </div>
    )
}
