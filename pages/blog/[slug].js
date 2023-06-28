import { MDXRemote } from 'next-mdx-remote';
import { getFiles, getFileBySlug } from '../../lib/mdx';
import HeaderComponent from '../../components/Layouts/HeaderComponent';
import FooterComponent from '../../components/Layouts/FooterComponent';
import Image from 'next/image';
import styles from '../../styles/pages/Item.module.css';

export default function Item({ source, frontmatter }) {
    return (
        <div>
            <HeaderComponent></HeaderComponent>
            <div style={{
                height: "50px",
            }}></div>
            <div className={styles.container} style={{
                maxWidth: "800px",
                margin: "0 auto",
            }}>
                <div className={styles.headSection} style={{
                    display: 'flex',
                    alignItems: 'center',
                    marginBottom: '30px',
                }}>
                    <div className={styles.headerTexts} style={{
                        flex: '5',
                        width: '100%',
                    }}>
                        <h2 style={{
                            color: '#545452',
                            marginBottom: '0px',
                            fontSize: '30px',
                        }}>{frontmatter.title}</h2>
                        <p style={{
                            marginTop: '5px',
                        }}>{frontmatter.date}</p>
                        <div style={{
                            borderBottom: '1px solid #e0e0e0',
                        }}></div>
                    </div>
                    <div style={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'flex-end',
                        flex: '2',
                    }}>
                        <Image
                            src={frontmatter.image}
                            alt={frontmatter.title}
                            width={130}
                            height={130}
                            objectFit='cover'
                            style={{ borderRadius: '50%' }}
                        />
                    </div>
                </div>
                <div className={styles.markdown} style={{
                    color: '#545452',
                }}>
                    <MDXRemote {...source} />
                </div>
            </div>
            <div style={{
                height: "70px",
            }}></div>
            <FooterComponent></FooterComponent>
        </div>
    );
}

export async function getStaticProps({ params }) {
    const { source, frontmatter } = await getFileBySlug(params.slug);

    return {
        props: {
            source,
            frontmatter
        },
    };
}

export async function getStaticPaths() {
    const posts = await getFiles();
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