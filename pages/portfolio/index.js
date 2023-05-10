import FooterComponent from "../../components/Layouts/FooterComponent";
import HeaderComponent from "../../components/Layouts/HeaderComponent";
import PortfolioItemComponent from "../../components/Others/PortfolioItemComponent";
import styles from "../../styles/pages/Portfolio.module.css";

export default function Home() {
    return (
        <div>
            <HeaderComponent></HeaderComponent>
            <div style={{
                textAlign: "center",
                width: "100%",
            }}>
                <div className={styles.portfolioInnerBox} style={{
                    margin: "0 auto",
                }}>
                    <PortfolioItemComponent
                        title="Portfolio Item 1 dfja;l lknsadf kdfs  sdk j"
                        image="https://i.ytimg.com/vi/i2Ote__R8dk/maxresdefault.jpg"
                        route={"/portfolio/1"}
                        ></PortfolioItemComponent>
                    <PortfolioItemComponent
                        title="Portfolio Item 1 dfja;l"
                        image="https://i.ytimg.com/vi/i2Ote__R8dk/maxresdefault.jpg"
                        route={"/portfolio/1"}
                        ></PortfolioItemComponent>
                    <PortfolioItemComponent
                        title="Portfolio Item 1 dfja;l"
                        image="https://i.ytimg.com/vi/i2Ote__R8dk/maxresdefault.jpg"
                        route={"/portfolio/1"}
                        ></PortfolioItemComponent>
                    <PortfolioItemComponent
                        title="Portfolio Item 1 dfja;l"
                        image="https://i.ytimg.com/vi/i2Ote__R8dk/maxresdefault.jpg"
                        route={"/portfolio/1"}
                        ></PortfolioItemComponent>
                    <PortfolioItemComponent
                        title="Portfolio Item 1 dfja;l"
                        image="https://i.ytimg.com/vi/i2Ote__R8dk/maxresdefault.jpg"
                        route={"/portfolio/1"}
                    ></PortfolioItemComponent>
                </div>
            </div>
            <FooterComponent></FooterComponent>
        </div>
    );
}