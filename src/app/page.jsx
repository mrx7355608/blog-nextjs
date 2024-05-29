import React from "react";
import BlogsList from "@/components/blogs/BlogsList";
import { Inter } from "next/font/google";
import { getBlogs } from "@/lib/data";

const inter = Inter({ subsets: ["latin"] });

export default async function page({ searchParams }) {
    const q = searchParams?.q || "";
    const blogs = await getBlogs(q);
    return (
        <main
            className={`bg-black min-h-screen flex items-start justify-center py-12 px-12 w-full ${inter.className}`}
        >
            <BlogsList blogs={blogs} />
        </main>
    );
}
