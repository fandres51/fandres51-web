import { MDXRemote } from 'next-mdx-remote';
import { getFiles, getFileBySlug } from '../../lib/mdx';
import styles from '../../styles/Post.module.css';
import HeaderComponent from "../../components/HeaderComponent";
import FooterComponent from "../../components/FooterComponent";
import BlogTitle from "../../components/BlogTitle";

export default function Post({ source, frontmatter }) {
    return (
        <div className={styles.portfolioPage}>
            <HeaderComponent
                title={'@fandres51'}
                titleLink={'/'}
                callToAction={'Get in touch'}
                callToActionLink={'https://linktr.ee/fandres51'}
            ></HeaderComponent>
            <div className={styles.line}></div>
            <div className={styles.title}>
                <BlogTitle
                    title={frontmatter.title}
                    img={frontmatter.img}
                    height={250}
                    width={770}
                ></BlogTitle>
            </div>
            <div className={styles.content}>
                <MDXRemote {...source} />
            </div>
            <FooterComponent
                title={'Get in touch with me'}
            ></FooterComponent>
        </div>
    );
}

export async function getStaticProps({ params }) {
    const { source, frontmatter } = await getFileBySlug(params.slug, 'blogs');

    return {
        props: {
            source,
            frontmatter
        },
    };
}

export async function getStaticPaths() {
    const posts = await getFiles('blogs');
    const paths = posts.map((post) => ({
        params: {
            slug: post.replace(/\.mdx/, ""),
        },
    }));

    return {
        paths,
        fallback: false,
    };
}
