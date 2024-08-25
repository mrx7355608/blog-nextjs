"use client";

import { getOneBlogBySlug } from "@/lib/data";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import parse from "html-react-parser";

import Prism from "prismjs";
import "prismjs/components/prism-java";
import "prismjs/components/prism-python";
import "prismjs/components/prism-c";
import "prismjs/components/prism-cpp";
import "prismjs/components/prism-javascript";
import "prismjs/themes/prism.css";

export default function SingleBlog() {
    const { slug } = useParams();
    const [blog, setBlog] = useState();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getSingleBlog = async () => {
            const blogData = await getOneBlogBySlug(slug);
            setBlog(blogData);
            setLoading(false);
        };

        getSingleBlog().then(() => Prism.highlightAll());
    }, []);

    return (
        <>
            {loading ? (
                <p>Loading...</p>
            ) : (
                <div className="min-h-screen w-full pt-12 text-center">
                    <div className="w-full px-11 lg:px-0 lg:w-2/3 mx-auto">
                        <h1 className="text-4xl font-bold mb-1 text-gray-900 mt-3">
                            {blog.title}
                        </h1>
                        <p className="text-gray-500 text-lg mt-2 mb-3">
                            {new Date(blog.createdAt).toLocaleDateString()}
                        </p>
                        <div className="flex flex-wrap gap-2 mb-10 justify-center">
                            {blog.tags.map((tag, index) => (
                                <span
                                    key={index}
                                    className="font-medium text-md border border-gray-600 px-4 rounded-lg py-1 text-gray-600 tracking-wide"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                        <div className="no-tw-base">{parse(blog.content)}</div>
                    </div>
                </div>
            )}
        </>
    );
}
