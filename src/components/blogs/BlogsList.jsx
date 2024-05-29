"use client";
import BlogItem from "./BlogItem";

export default function BlogsList({ blogs }) {
    return (
        <div className="flex items-center justify-start flex-col max-w-4xl">
            {blogs.map((b) => (
                <BlogItem blog={b} key={b._id} />
            ))}
        </div>
    );
}
