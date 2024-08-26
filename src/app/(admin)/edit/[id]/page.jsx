"use client";

import Spinner from "@/components/Spinner";
import { getBlogById } from "@/lib/data";
import { useParams } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import TinyMceEditor from "@/components/add-blogs/TinyMceEditor";
import TitleInput from "@/components/add-blogs/TitleInput";
import SummaryInput from "@/components/add-blogs/SummaryInput";
import TagsInput from "@/components/add-blogs/TagsInput";
import PublishUnpublishInput from "@/components/add-blogs/PublishUnpublishInput";

export default function EditBlog() {
    const { id } = useParams();
    const [blog, setBlog] = useState(null);

    const [isLoading, setIsLoading] = useState(true);
    const [editing, setEditing] = useState(false);

    const [error, setError] = useState("");
    const [editingError, setEditingError] = useState("");

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
                <TitleInput
                    onChangeHandler={onChangeHandler}
                    title={blog.title}
                />

                {/* Summary */}
                <SummaryInput
                    onChangeHandler={onChangeHandler}
                    summary={blog.summary}
                />

                {/* Content */}
                <TinyMceEditor content={blog.content} ref={editorRef} />

                <div className="w-full">
                    {/* Tags */}
                    <TagsInput
                        tags={blog.tags}
                        inputTag={inputTag}
                        setInputTag={setInputTag}
                        addTag={addTag}
                        removeTag={removeTag}
                    />

                    {/* Blog status (Published / Draft) */}
                    <PublishUnpublishInput setBlog={setBlog} />
                </div>

                {/* Error Message */}
                {editingError && (
                    <p className="px-6 py-2 bg-red-100 text-red-700 font-medium">
                        {editingError}
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
                setEditingError(result.error);
                setTimeout(() => {
                    setEditingError("");
                }, 5000);
            } else {
                location.pathname = "/dashboard";
            }
        } catch (err) {
            setEditingError("Something went wrong!");
            setTimeout(() => {
                setEditingError("");
            }, 5000);
        } finally {
            setEditing(false);
        }
    }
}
