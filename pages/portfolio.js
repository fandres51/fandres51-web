import HeaderComponent from "../components/HeaderComponent";
import FooterComponent from "../components/FooterComponent";
import BoxWithTitle from "../components/BoxWithTitle";
import styles from '../styles/Portfolio.module.css'
import Link from "next/link";
import { getAllFilesMetadata } from "../lib/mdx";

export default function Portfolio({posts}) {
    return (
        <div>
            <HeaderComponent
                title="@fandres51"
                titleLink="/"
                callToAction="Get in touch"
                callToActionLink="https://linktr.ee/fandres51"
            ></HeaderComponent>
            <div className={styles.list}>
                { posts.map((post) => (
                    <div className={styles.element}>
                        <BoxWithTitle
                            key={post.title+post.date}
                            title={post.title}
                            img={post.img}
                            link={`/portfolio/${post.slug}`}
                            height={220}
                            width={310}
                        ></BoxWithTitle>
                    </div>
                ))}    
            </div>
            <FooterComponent></FooterComponent>
        </div>
    )
}

export async function getStaticProps() {
    const posts = await getAllFilesMetadata();
    console.log(posts);

    return {
        props: { posts },
    };
}