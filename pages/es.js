import Head from "next/head";
import styles from "../styles/Home.module.css";
import HeaderComponent from "../components/HeaderComponent";
import FooterComponent from "../components/FooterComponent";
import BannerComponent from "../components/BannerComponent";
import AboutComponent from "../components/AboutComponent";
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
                    message="Hola, soy Fabio Andrés Enríquez, un estudiante de márketing digital de Quito, Ec."
                    buttonMessage="Mira mi portafolio"
                    buttonAction="/portfolio/es"
                ></BannerComponent>
                <div className={styles.about}>
                    <AboutComponent
                        title={"Acerca de mi"}
                        text={aboutText}
                    ></AboutComponent>
                </div>
                <div className={styles.aboutline}></div>
                <div className={styles.previousWork}>
                    <div className={styles.previousWorkTitle}>
                        <TitleComponent
                            title={'Trabajos previos'}
                            align={'center'}
                        ></TitleComponent>
                    </div>
                    <div className={styles.bigScreens}>
                        <GaleryComponent
                            title1={'Márketing'}
                            title2={'UX'}
                            title3={'Programación'}
                            title4={'Publicidad'}
                        ></GaleryComponent>
                    </div>
                    <div className={styles.smallScreens}>
                        <PhoneGalery
                            title1={'Márketing'}
                            title2={'UX'}
                            title3={'Programación'}
                            title4={'Publicidad'}
                        ></PhoneGalery>
                    </div>
                    <div>
                        <Link href={'/portfolio/es'}>
                            <div className={styles.workMessage}>
                                <div className={styles.workMessage}>Mira mi portafolio completo</div>
                                <BsArrowRightShort size={27} color='#226E93' />
                            </div>
                        </Link>
                    </div>
                </div>
            </main>
            <FooterComponent
                title={'Contáctate conmigo'}
            ></FooterComponent>
        </div>
    );
}

