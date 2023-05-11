import Head from "next/head";
import styles from "../styles/pages/Home.module.css";
import HeaderComponent from "../components/Layouts/HeaderComponent";
import FooterComponent from "../components/Layouts/FooterComponent";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <title>fandres51</title>
                <meta lang="es" />
            </Head>

            <main className={styles.main}>
                <HeaderComponent></HeaderComponent>

                <div style={{ // Line separator
                    width: '100%',
                    borderTop: '1px solid #e0e0e0',
                    marginBottom: 100,
                }}></div>

                <div className={styles.banner} style={{ //banner
                    display: 'flex',
                    alignItems: 'center',
                }}>
                    <div style={{ //text
                        maxWidth: '470px',
                    }}>
                        <h2 style={{
                            color: '#545452',
                            margin: 0,
                        }}>Hola, soy Fabio Andr&eacute;s, Software Developer y Digital Marketing Freelancer</h2>
                        <div style={{
                            marginTop: 20,
                            marginBottom: 20,
                        }}>
                            <a style={{
                                color: '#545452',
                                fontSize: 25,
                                fontWeight: 400,
                                textDecoration: 'underline',
                                cursor: 'pointer',
                            }} target="blank" href="https://www.linkedin.com/in/fabio-andres-enriquez-476692194/?locale=es_ES"
                            >Encu&eacute;ntrame en LinkedIn</a>
                        </div>
                    </div>
                    <div className={styles.image} style={{ //image
                        border: '1px solid #e0e0e0',
                        borderRadius: '50%',
                    }}>
                        <Image style={{
                            borderRadius: '50%',
                        }}
                            src="/images/profile_bn.png"
                            alt="Profile picture"
                            width={350}
                            height={350} />
                    </div>
                </div>

                <div style={{ // Line separator
                    width: '100%',
                    borderTop: '1px solid #e0e0e0',
                    marginTop: 100,
                }}></div>

                <div>
                    <div style={{
                        padding: '0 20px',
                        textAlign: 'center',
                        marginTop: 100,
                    }}>
                        <h2>Esta p&aacute;gina web está en construcción 🚧</h2>
                        <p>Puedes visitar la <Link href='/'>versi&oacute;n en ingl&eacute;s</Link> or visitar mi GitHub:</p>
                    </div>
                    <div style={{
                        textAlign: 'center',
                        margin: '50px 0',
                    }} className={styles.previousWork}>
                        <a href="https://github.com/fandres51" target="blank" className={styles.portfolioLogo}>
                            <Image className={styles.logoImg} src="/images/GithubLogo.png" alt="Github logo" width={250} height={250} />
                        </a>
                    </div>
                </div>

                <div style={{ // Line separator
                    width: '100%',
                    borderTop: '1px solid #e0e0e0',
                    marginTop: 130,
                }}></div>

                <FooterComponent
                    title={'Get in touch with me'}
                ></FooterComponent>

            </main>
        </div>
    );
}

