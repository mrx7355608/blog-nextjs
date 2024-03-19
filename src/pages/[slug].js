import SingleBlogTag from "@/components/SingleBlogTag";
import parse from "html-react-parser";
import { useEffect } from "react";
import Prism from "prismjs";
import "prismjs/themes/prism-tomorrow.css";
import "prismjs/components/prism-java";
import "prismjs/components/prism-python";
import "prismjs/components/prism-c";
import "prismjs/components/prism-cpp";

export default function SingleBlog({ blog }) {
    useEffect(() => {
        Prism.highlightAll();
    }, []);
    return (
        <div className="min-h-screen w-full pt-12">
            <div className="w-full px-11 lg:px-0 lg:w-2/3 mx-auto">
                <h1 className="text-4xl font-black mb-1 text-white">
                    {blog.title}
                </h1>
                <i className="text-gray-400 text-lg">{blog.published_on}</i>
                <div className="flex flex-wrap gap-2 mt-2 mb-10">
                    {blog.tags.map((tag, index) => (
                        <SingleBlogTag tag={tag} key={index} />
                    ))}
                </div>
                <div className="no-tw-base">{parse(blog.content)}</div>
            </div>
        </div>
    );
}

export async function getStaticPaths() {
    const response = await fetch(`${process.env.SERVER_URL}/published`);
    const result = await response.json();
    const blogSlugs = result.data.map((b) => {
        return {
            params: { slug: b.slug },
        };
    });

    return {
        paths: blogSlugs,
        fallback: false,
    };
}
export async function getStaticProps({ params }) {
    const response = await fetch(`${process.env.SERVER_URL}/${params.slug}`);
    const result = await response.json();

    return {
        props: {
            blog: result.data,
        },
    };
}
