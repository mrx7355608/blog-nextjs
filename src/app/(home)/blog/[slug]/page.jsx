import SingleBlogTag from "@/components/SingleBlogTag";
import parse from "html-react-parser";
import { useEffect } from "react";
import Prism from "prismjs";
import "prismjs/themes/prism-tomorrow.css";
import "prismjs/components/prism-java";
import "prismjs/components/prism-python";
import "prismjs/components/prism-c";
import "prismjs/components/prism-cpp";
import BlogPageUI from "@/components/blogs/BlogPageUI";

export default function SingleBlog() {
    // TODO: fetch blogs
    const blog = {};
    return <BlogPageUI blog={blog} />;
}
