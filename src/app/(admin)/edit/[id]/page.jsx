"use client";

import Spinner from "@/components/Spinner";
import { getBlogById } from "@/lib/data";
import { useParams } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import TinyMceEditor from "@/components/add-blogs/TinyMceEditor";

export default function EditBlog() {
    const { id } = useParams();
    const [blog, setBlog] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState("");
    const [editing, setEditing] = useState(false);
    const [inputTag, setInputTag] = useState("");
    const editorRef = useRef();

    useEffect(() => {
        getBlogById(id)
            .then((data) => setBlog(data))
            .catch((err) => setError(err.message))
            .finally(() => setIsLoading(false));
    }, [id]);

    if (error) {
        return <p className="text-center text-red-600 font-medium">{error}</p>;
    }

    if (isLoading) {
        return (
            <div className="flex items-center justify-center min-h-[60vh]">
                <Spinner />
            </div>
        );
    }

    const onChangeHandler = (e) => {
        const { name, value } = e.target;
        setBlog({ ...blog, [name]: value });
    };

    return (
        <div className="bg-white rounded-lg p-5">
            <h1 className="text-3xl font-bold text-center mt-5 mb-8">
                Edit Blog
            </h1>
            <div className="w-3/4 mx-auto flex flex-col gap-4">
                {/* Title */}
                <input
                    type="text"
                    name="title"
                    value={blog.title}
                    className="input bg-gray-100 text-xl"
                    placeholder="Title"
                    onChange={onChangeHandler}
                />

                {/* Summary */}
                <textarea
                    name="summary"
                    rows={4}
                    className="textarea resize-none bg-gray-100 text-md"
                    placeholder="Summary"
                    onChange={onChangeHandler}
                    value={blog.summary}
                ></textarea>

                {/* Content */}
                <TinyMceEditor content={blog.content} ref={editorRef} />

                {/* Tags */}
                <div className="w-full">
                    <div className="flex flex-wrap gap-4 mb-6 mt-5">
                        {blog.tags.map((item, index) => {
                            return (
                                <div
                                    className="px-4 py-2 rounded-lg bg-gray-100"
                                    key={index}
                                >
                                    <span>{item}</span>
                                    <span
                                        onClick={() => removeTag(item)}
                                        className="btn btn-xs btn-error rounded-full p-1 px-2 pb-1.5 ml-2"
                                    >
                                        x
                                    </span>
                                </div>
                            );
                        })}
                        <div className="flex gap-3 w-full">
                            <input
                                className="input w-full bg-gray-100"
                                placeholder="Tag"
                                onChange={(e) => setInputTag(e.target.value)}
                                value={inputTag}
                            />
                            <span className="btn" onClick={addTag}>
                                Add tag
                            </span>
                        </div>
                    </div>

                    {/* Blog status (Published / Draft) */}
                    <div className="form-control mt-8">
                        <label className="label cursor-pointer">
                            <span className="label-text">Draft</span>
                            <input
                                type="radio"
                                name="is_published"
                                value="no"
                                className="radio checked:bg-red-500"
                                onClick={() =>
                                    setBlog({ ...blog, is_published: false })
                                }
                                defaultChecked
                            />
                        </label>
                    </div>
                    <div className="form-control">
                        <label className="label cursor-pointer">
                            <span className="label-text">Published</span>
                            <input
                                type="radio"
                                name="is_published"
                                value="yes"
                                className="radio checked:bg-blue-500"
                                onClick={() =>
                                    setBlog({ ...blog, is_published: true })
                                }
                            />
                        </label>
                    </div>
                </div>

                {/* Error Message */}
                {error && (
                    <p className="px-6 py-2 bg-red-100 text-red-700 font-medium">
                        {error}
                    </p>
                )}
                {/* Button */}
                <button
                    className="btn btn-neutral text-white rounded-full mt-9"
                    type="submit"
                    disabled={editing}
                    onClick={edit}
                >
                    {editing ? <Spinner /> : "Update"}
                </button>
            </div>
        </div>
    );

    function removeTag(tag) {
        setBlog({ ...blog, tags: blog.tags.filter((t) => t !== tag) });
    }
    function addTag() {
        if (inputTag.trim()) {
            setBlog({ ...blog, tags: [inputTag, ...blog.tags] });
            setInputTag("");
        }
    }

    async function edit() {
        const data = {
            title: blog.title,
            summary: blog.summary,
            content: editorRef.current.getContent(),
            tags: blog.tags,
            is_published: blog.is_published,
        };

        try {
            setEditing(true);

            // 1. Make api request
            const response = await fetch(`/api/blogs/${blog._id}`, {
                method: "PATCH",
                credentials: "include",
                headers: {
                    "Content-type": "application/json",
                },
                body: JSON.stringify(data),
            });

            // 2. Show errors / Redirect to dashboard
            if (!response.ok) {
                const result = await response.json();
                setError(result.error);
            } else {
                location.pathname = "/dashboard";
            }
        } catch (err) {
            setError("Something went wrong!");
        } finally {
            setEditing(false);
        }
    }
}
