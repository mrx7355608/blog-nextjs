import React from "react";
import Link from "next/link";
import TagsList from "./Tagslist";
import { FaArrowRight } from "react-icons/fa";

export default function BlogCard({ blog }) {
    return (
        <div className="flex flex-col p-3 my-4 w-full">
            {/* Title */}
            <Link href={`/${blog.slug}`}>
                <h1 className="text-3xl font-bold inline text-gray-100 hover:underline">
                    {blog.title}
                </h1>
            </Link>

            {/* Publishing date */}
            <i className="text-gray-500 font-medium mt-2">
                {blog.published_on}
            </i>

            {/* Tags */}
            <TagsList tags={blog.tags} />

            {/* Summary */}
            <p className="text-gray-400 mt-4 mb-12 leading-6 font-normal">
                {blog.summary}
            </p>

            {/* Read button */}
            <Link
                href={`/${blog.slug}`}
                className="font-bold text-sm btn bg-transparent text-yellow-500 border-0 outline-0 w-24 ml-auto mb-5 duration-200 ease-out hover:bg-transparent hover:translate-x-4"
            >
                READ{" "}
                <FaArrowRight color="inherit" size={14} className="inline" />
            </Link>
            <hr className="border-gray-800" />
        </div>
    );
}
