import HeaderComponent from "../components/HeaderComponent";
import FooterComponent from "../components/FooterComponent";
import BoxWithTitle from "../components/BoxWithTitle";
import styles from '../styles/Portfolio.module.css'
import { getAllFilesMetadata } from "../lib/mdx";
import { BsSearch } from 'react-icons/bs';
import { useState } from "react";
import { useRouter } from 'next/router'

export default function Portfolio({ posts }) {

    const router = useRouter();
    const [showedPosts, setShowedPosts] = useState(posts);
    const [searchedWord, setSearchedWord] = useState('');

    let search = (word) => {
        let showed = posts.filter((post) => {
            return post.title.toLowerCase().includes(word.toLowerCase()) || post.keywords.toLowerCase().includes(word.toLowerCase());
        });
        setShowedPosts(showed);
    }

    const handleChange = event => {
        setSearchedWord(event.target.value);
    };

    return (
        <div>
            <HeaderComponent
                title="@fandres51"
                titleLink="/"
                callToAction="Get in touch"
                callToActionLink="https://linktr.ee/fandres51"
            ></HeaderComponent>
            <div className={styles.line}></div>
            <div className={styles.body}>
                <div className={styles.filters}>
                    <div className={styles.title} onClick={()=>search('')}>
                        Portfolio
                    </div>
                    <div className={styles.searchbar}>
                        <input
                            type="text"
                            className={styles.searchinput}
                            placeholder="Search" value={searchedWord}
                            onChange={handleChange} />
                        <button className={styles.searchbutton} onClick={() => search(searchedWord)}>
                            <BsSearch size={17} color='#226E93' />
                        </button>
                    </div>
                </div>
                <div className={styles.list}>
                    {showedPosts.map((post) => (
                        <div className={styles.element} key={post.title + post.date}>
                            <BoxWithTitle
                                title={post.title}
                                img={post.img}
                                link={`/portfolio/${post.slug}`}
                                height={220}
                                width={300}
                            ></BoxWithTitle>
                        </div>
                    ))}
                </div>
            </div>
            <FooterComponent
                title={'Get in touch with me'}
            ></FooterComponent>
        </div>
    )
}

export async function getStaticProps() {
    const posts = await getAllFilesMetadata('portfolio');

    return {
        props: { posts },
    };
}