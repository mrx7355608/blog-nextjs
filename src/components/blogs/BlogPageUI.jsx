"use client";
import React from "react";
import TagItem from "../tags/TagItem";
import parse from "html-react-parser";

export default function BlogPageUI({ blog }) {
    // useEffect(() => {
    //     Prism.highlightAll();
    // }, []);

    return (
        <div className="min-h-screen w-full pt-12">
            <div className="w-full px-11 lg:px-0 lg:w-2/3 mx-auto">
                <h1 className="text-4xl font-black mb-1 text-white">
                    {blog.title}
                </h1>
                <i className="text-gray-400 text-lg">{blog.published_on}</i>
                <div className="flex flex-wrap gap-2 mt-2 mb-10">
                    {blog.tags.map((tag, index) => (
                        <TagItem tag={tag} key={index} />
                    ))}
                </div>
                <div className="no-tw-base">{parse(blog.content)}</div>
            </div>
        </div>
    );
}
