import React from "react";
import Link from "next/link";
import TagsList from "../tags/Tagslist";
import { FaArrowRight } from "react-icons/fa";

export default function BlogItem({ blog }) {
    return (
        <div className="flex flex-col w-full mb-12">
            {/* Title */}
            <Link href={`/blog/${blog.slug}`}>
                <h1 className="text-4xl font-bold inline text-gray-100 hover:underline">
                    {blog.title}
                </h1>
            </Link>

            {/* Publishing date */}
            <span className="text-gray-400 mt-1">
                {new Date(blog.createdAt).toDateString().slice(4)}
            </span>

            {/* Tags */}
            <TagsList tags={blog.tags} />

            {/* Summary */}
            <p className="mt-5 mb-2 leading-6 tracking-wide text-lg text-gray-200">
                {blog.summary}
            </p>

            {/* Read button */}
            <Link
                href={`/blog/${blog.slug}`}
                className="ml-auto mb-3 font-bold text-sm btn bg-transparent shadow-none text-yellow-400 border-0 outline-0 w-24 duration-200 ease-out hover:bg-transparent hover:translate-x-4"
            >
                READ{" "}
                <FaArrowRight color="inherit" size={14} className="inline" />
            </Link>

            <hr className="border-gray-700" />
        </div>
    );
}
