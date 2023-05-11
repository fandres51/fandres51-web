import FooterComponent from "../../components/Layouts/FooterComponent";
import HeaderComponent from "../../components/Layouts/HeaderComponent";
import PortfolioItemComponent from "../../components/Others/PortfolioItemComponent";
import styles from "../../styles/pages/Portfolio.module.css";
import { getAllFilesMetadata } from "../../lib/mdx";

export default function Home({ items }) {

    return (
        <div>
            <HeaderComponent></HeaderComponent>
            <h1 style={{
                textAlign: "center",
                fontSize: "30px",
                color: "#545452",
                marginTop: "50px",
                marginBottom: "25px",
            }}>Projects I have worked on:</h1>
            <div style={{
                textAlign: "center",
                width: "100%",
            }}>
                <div className={styles.portfolioInnerBox} style={{
                    margin: "0 auto",
                }}>
                    {items.map((item) => (
                        <PortfolioItemComponent
                            title={item.title}
                            key={item.title}
                            image={item.image}
                            route={"/portfolio/" + item.title.replace(/\s+/g, '-').toLowerCase()}
                        ></PortfolioItemComponent>
                    ))}
                </div>
            </div>
            <div style={{
                height: "70px",
            }}></div>
            <FooterComponent></FooterComponent>
        </div>
    );
}

export async function getStaticProps() {
    const items = await getAllFilesMetadata();

    return {
        props: { items },
    };
}