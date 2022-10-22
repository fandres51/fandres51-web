import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { serialize } from "next-mdx-remote/serialize";

const root = process.cwd();

export const getFiles = (origin) => fs.readdirSync(path.join(root, "data", `${origin}`));

export const getFileBySlug = async (slug, origin) => {
    const mdxSource = fs.readFileSync(
        path.join(root, "data", `${origin}`, `${slug}.mdx`),
        "utf-8"
    );
    const { data, content } = await matter(mdxSource);
    const source = await serialize(content, {});

    return {
        source,
        frontmatter: {
            slug,
            ...data,
        },
    };
};

export const getAllFilesMetadata = (origin) => {
    const files = getFiles(`${origin}`);
    
    return files.reduce((allPosts, postSlug) => {
        const mdxSource = fs.readFileSync(
            path.join(root, "data", `${origin}`, postSlug),
            "utf-8"
        );
        const { data } = matter(mdxSource);
        // if(typeof data.keywords === "string")
            // data.keywords = data.keywords.split(',');
        return [{...data, slug: postSlug.replace('.mdx', '')}, ...allPosts]
    }, []);
};
