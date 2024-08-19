import React from "react";
import Link from "next/link";
import TagsList from "../tags/Tagslist";
import { FaArrowRight } from "react-icons/fa";

export default function BlogItem({ blog }) {
    return (
        <div className="flex flex-col w-full mb-12">
            {/* Title */}
            <Link href={`/blog/${blog.slug}`}>
                <h1 className="text-3xl font-bold inline text-gray-800 hover:underline">
                    {blog.title}
                </h1>
            </Link>

            {/* Summary */}
            <p className="text-gray-600 mt-2 mb-3 leading-6 tracking-wide">
                {blog.summary}
            </p>

            {/* Tags */}
            <TagsList tags={blog.tags} />

            {/* Read button */}
            <div className="w-full flex items-center justify-between mt-3 mb-3">
                {/* Publishing date */}
                <span className="text-gray-500">
                    {new Date(blog.createdAt).toDateString().slice(4)}
                </span>
                <Link
                    href={`/blog/${blog.slug}`}
                    className="font-bold text-sm btn bg-transparent shadow-none text-yellow-600 border-0 outline-0 w-24 duration-200 ease-out hover:bg-transparent hover:translate-x-4"
                >
                    READ{" "}
                    <FaArrowRight
                        color="inherit"
                        size={14}
                        className="inline"
                    />
                </Link>
            </div>

            <hr className="border-gray-200" />
        </div>
    );
}
