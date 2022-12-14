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
import Image from "next/image";

export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <title>fandres51</title>
                <meta
                    name="description"
                    content="Generated by create next app"
                    lang="en"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={styles.main}>
                <HeaderComponent
                    title="@fandres51"
                    titleLink="/"
                    callToAction="Get in touch"
                    callToActionLink="https://linktr.ee/fandres51"
                ></HeaderComponent>
                <div className={styles.upperline}></div>
                <BannerComponent
                    message="Hi, I'm Fabio Andrés Enríquez, a Software Developer based on Quito, Ec."
                    buttonMessage="Find me on Linkedin"
                    buttonAction="https://www.linkedin.com/in/fabio-andres-enriquez-476692194/"
                ></BannerComponent>
                <div className={styles.about}>
                    <AboutComponent
                        title={"About me:"}
                    ></AboutComponent>
                </div>
                <div className={styles.aboutline}></div>
                <div className={styles.previousWork}>
                    {/* <div className={styles.previousWorkTitle}>
                        <TitleComponent
                            title={'My Previous Work'}
                            align={'center'}
                        ></TitleComponent>
                    </div> */}
                    <a href="https://github.com/fandres51" target="blank" className={styles.portfolioLogo}>
                        <Image className={styles.logoImg} src="/images/GithubLogo.png" alt="Github logo" width={320} height={320} />
                    </a>
                    <div style={{marginTop: 30}}>
                        <a href={'https://github.com/fandres51'} target="blank" style={{ textDecoration: "none" }}>
                            <div className={styles.workMessage}>
                                <div className={styles.workMessage}>Check out my portfolio</div>
                                <BsArrowRightShort size={27} color='#226E93' />
                            </div>
                        </a>
                    </div>
                </div>
            </main>
            <FooterComponent
                title={'Get in touch with me'}
            ></FooterComponent>
        </div>
    );
}

