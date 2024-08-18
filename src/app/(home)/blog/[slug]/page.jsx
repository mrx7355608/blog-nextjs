"use client";
// import "prismjs/themes/prism-tomorrow.css";
// import "prismjs/components/prism-java";
// import "prismjs/components/prism-python";
// import "prismjs/components/prism-c";
// import "prismjs/components/prism-cpp";
import BlogPageUI from "@/components/blogs/BlogPageUI";
import { getOneBlogBySlug } from "@/lib/data";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function SingleBlog() {
    const { slug } = useParams();
    const [blog, setBlog] = useState();
    const [loading, setLoading] = useState(true);
    // const [blog, setBlog] = useState();

    useEffect(() => {
        const getSingleBlog = async () => {
            const blogData = await getOneBlogBySlug(slug);
            setBlog(blogData);
            setLoading(false);
        };

        getSingleBlog();
    }, [slug]);

    return <>{loading ? <p>Loading...</p> : <BlogPageUI blog={blog} />}</>;
}
