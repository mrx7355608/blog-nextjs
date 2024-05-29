import BlogsTable from "@/components/dashboard/BlogsTable";
import Searchbar from "@/components/navbar/Searchbar";
import { getBlogs } from "@/lib/data";
import React from "react";

export default async function Dashboard({ searchParams }) {
    const q = searchParams?.q || "";
    const blogs = await getBlogs(q);
    console.log(blogs);

    return (
        <div className="bg-zinc-950 text-white p-5 px-7 rounded-lg w-[90vw]">
            <div className="flex justify-between items-center w-full">
                <h1 className="text-2xl font-bold">Blogs</h1>
                <Searchbar />
            </div>
            <BlogsTable blogs={blogs} />
        </div>
    );
}
