import Head from "next/head";
import styles from "../styles/Home.module.css";
import HeaderComponent from "../components/HeaderComponent";
import FooterComponent from "../components/FooterComponent";
import BannerComponent from "../components/BannerComponent";
import AboutEsComponent from "../components/AboutEsComponent";
import GaleryComponent from '../components/GaleryComponent';
import PhoneGalery from '../components/PhoneGalery';
import TitleComponent from '../components/TitleComponent';
import { BsArrowRightShort } from 'react-icons/bs';
import Link from "next/link";

export default function Home() {
    const aboutText = `
    Que tal! Soy Fabio, un ingeniero informático que se apasionó por el mundo del márketing y la creatividad después de graduarse. 
    Debido a mi formación, amo la tecnología, por lo tanto combino las mejores prácticas de programación, diseño de experiencia de usuario y márqueting digital en todo trabajo que realizo.
    Si necesitas ayuda en cualquiera de estas áreas, no dudes en comunicarte conmigo.
    `
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
                    <AboutEsComponent
                        title={"Acerca de mi"}
                    ></AboutEsComponent>
                </div>
                <div className={styles.aboutline}></div>
                <div className={styles.previousWork}>
                    {/* <div className={styles.previousWorkTitle}>
                        <TitleComponent
                            title={'Trabajos previos'}
                            align={'center'}
                        ></TitleComponent>
                    </div>
                     */}
                    <a href="https://github.com/fandres51" target="blank" className={styles.portfolioLogo}>
                        <img className={styles.logoImg} src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="Github logo" />
                    </a>
                    <div>
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

