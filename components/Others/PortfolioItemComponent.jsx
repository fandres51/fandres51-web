import React from 'react'
import Image from "next/image";
import styles from "../../styles/pages/Portfolio.module.css";
import Link from 'next/link';

export default function PortfolioItemComponent({ image, title, route }) {
    return (
        <div className={styles.card} style={{
            cursor: 'pointer',
            display: 'inline-block',
            margin: '15px',
            border: '1px solid #E5E5E5',
            borderRadius: '18px',
        }}>
            <Link href={route}>
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'top',
                    maxWidth: '300px',
                }}>
                    <div>
                        <Image
                            src={image}
                            alt="Project Image Sample"
                            width={300}
                            height={150}
                            objectFit='cover'
                            style={{ borderRadius: '15px' }}
                        />
                    </div>
                    <div style={{
                        height: '20px',
                    }}></div>
                    <div style={{
                        fontSize: '20px',
                        fontWeight: '600',
                        color: '#545550',
                        textAlign: 'center',
                    }}>{title}</div>
                </div>
            </Link>
        </div>
    )
}