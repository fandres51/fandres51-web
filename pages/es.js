import Head from "next/head";
import styles from "../styles/pages/Home.module.css";
import HeaderComponent from "../components/Layouts/HeaderComponent";
import FooterComponent from "../components/Layouts/FooterComponent";
import BannerComponent from "../components/BannerComponent";
import { BsArrowRightShort } from 'react-icons/bs';
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
                <HeaderComponent
                    title="@fandres51"
                    titleLink="/es"
                    callToAction="Contáctame"
                    callToActionLink="https://linktr.ee/fandres51"
                ></HeaderComponent>
                <div className={styles.upperline}></div>
                <BannerComponent
                    message="Hola, soy Fabio Andrés Enríquez, desarrollador de software de Quito, Ec."
                    buttonMessage="Encuéntrame en Linkedin"
                    buttonAction={'https://www.linkedin.com/in/fabio-andres-enriquez-476692194/'}
                ></BannerComponent>
                <div className={styles.about}>
                    {/* <AboutEsComponent
                        title={"Acerca de mi"}
                    ></AboutEsComponent> */}
                </div>
                <div style={{
                    padding: '0 20px',
                }}>
                    <h2>Esta p&aacute;gina todav&iacute;a est&aacute; en construcci&oacute;n 🚧</h2>
                    <p>Puedes ir a <Link href='/'>la versi&oacute;n en ingl&eacute;s</Link> o mirar mi portafolio:</p>
                </div>
                {/* <div className={styles.aboutline}></div> */}
                <div className={styles.previousWork}>
                    {/* <div className={styles.previousWorkTitle}>
                        <TitleComponent
                            title={'Trabajos previos'}
                            align={'center'}
                        ></TitleComponent>
                    </div>
                     */}
                    <a href="https://github.com/fandres51" target="blank" className={styles.portfolioLogo}>
                        <Image className={styles.logoImg} src="/images/GithubLogo.png" alt="Github logo"  width={320} height={320}/>
                    </a>
                    <div style={{marginTop: 30}}>
                        <a href="https://behance.net/fandres51" target="blank" style={{ textDecoration: "none" }}>
                            <div className={styles.workMessage}>
                                <div className={styles.workMessage}>Mira mi portafolio</div>
                                <BsArrowRightShort size={27} color='#226E93' />
                            </div>
                        </a>
                    </div>
                </div>
            </main>
            <FooterComponent
                title={'Contáctate conmigo'}
            ></FooterComponent>
        </div>
    );
}

