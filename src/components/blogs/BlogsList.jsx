"use client";
import BlogItem from "./BlogItem";

export default function BlogsList({ blogs }) {
    return (
        <div className="flex items-center justify-start flex-col w-full mt-12">
            {blogs.map((b) => (
                <BlogItem blog={b} key={b._id} />
            ))}
        </div>
    );
}
