import React from "react";
import BlogsList from "@/components/blogs/BlogsList";
import { getBlogs } from "@/lib/data";

export default async function page({ searchParams }) {
    const q = searchParams?.q || "";
    const blogs = await getBlogs(q);

    return <BlogsList blogs={blogs} />;
}
