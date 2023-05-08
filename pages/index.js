import Head from "next/head";
import styles from "../styles/pages/Home.module.css";
import HeaderComponent from "../components/Layouts/HeaderComponent";
import FooterComponent from "../components/Layouts/FooterComponent";
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
                    content="Personal and professional portfolio of Fabio Andrés Enríquez"
                    lang="en"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={styles.main}>
                
                <HeaderComponent></HeaderComponent>
                
                <div style={{ // Line separator
                    width: '100%',
                    borderTop: '1px solid #e0e0e0',
                }}></div>

                <div style={{ //banner element
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    margin: '60px 16px',
                }}>
                    <div style={{
                        width: '460px',
                    }}>
                        <p style={{
                            fontSize: 48,
                            color: '#545452',
                        }}>Hi, I am Fabio Andrés, Software Developer and Marketing Freelancer</p>
                    </div>
                    <div style={{
                        padding: 40,
                        border: '1px solid #e0e0e0',
                        borderRadius: '50%',
                    }}>
                        <Image style={{
                            borderRadius: '50%',
                        }}
                            src="/images/banner-phone.png"
                            alt="Profile picture"
                            width={400}
                            height={400} />
                    </div>
                </div>

                <div style={{ // Line separator
                    width: '100%',
                    borderTop: '1px solid #e0e0e0',
                    marginTop: 200,
                }}></div>


                {/* <BannerComponent
                    message="Hi, I'm Fabio Andrés Enríquez, a Software Developer based on Quito, Ec."
                    buttonMessage="Find me on Linkedin"
                    buttonAction="https://www.linkedin.com/in/fabio-andres-enriquez-476692194/"
                ></BannerComponent> */}

                <div style={{
                    padding: '0 20px',
                    textAlign: 'center',
                    marginTop: 100,
                }}>
                    <h2>This web page is still under construction 🚧</h2>
                    <p>You can go to the <Link href='/es'>spanish version</Link> or check my portfolio:</p>
                </div>

                <div className={styles.previousWork}>
                    <a href="https://github.com/fandres51" target="blank" className={styles.portfolioLogo}>
                        <Image className={styles.logoImg} src="/images/GithubLogo.png" alt="Github logo" width={250} height={250} />
                    </a>
                    {/* <div style={{ marginTop: 30 }}>
                        <a href={'https://github.com/fandres51'} target="blank" style={{ textDecoration: "none" }}>
                            <div className={styles.workMessage}>
                                <div className={styles.workMessage}>Check out my portfolio</div>
                                <BsArrowRightShort size={27} color='#226E93' />
                            </div>
                        </a>
                    </div> */}
                </div>

                <div style={{ // Line separator
                    width: '100%',
                    borderTop: '1px solid #e0e0e0',
                }}></div>

                <FooterComponent
                    title={'Get in touch with me'}
                ></FooterComponent>

            </main>


        </div>
    );
}

