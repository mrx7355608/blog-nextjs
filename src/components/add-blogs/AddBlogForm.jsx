"use client";

import { useRef, useState } from "react";
import TinyMceEditor from "./TinyMceEditor";
import Spinner from "../Spinner";
import TitleInput from "./TitleInput";
import SummaryInput from "./SummaryInput";

export default function AddBlogForm() {
    const [tags, setTags] = useState([]);
    const [inputTag, setInputTag] = useState("");
    const [is_published, setIsPublished] = useState(false);
    const [data, setData] = useState({
        title: "",
        summary: "",
    });

    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(false);
    const editorRef = useRef();

    async function createBlog() {
        try {
            setIsLoading(true);
            const blogObject = Object.assign(
                data,
                { is_published },
                { tags },
                { content: editorRef.current.getContent() },
            );

            // 1. Make API request
            const response = await fetch("/api/blogs", {
                credentials: "include",
                method: "post",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(blogObject),
            });

            // 2. Check Error / Redirect to dashboard
            if (!response.ok) {
                const result = await response.json();
                setError(result.error);
                setTimeout(() => setError(""), 5000);
            } else {
                location.pathname = "/dashboard";
            }
        } catch (err) {
            setError("Something went wrong!");
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <div className="w-3/4 mx-auto flex flex-col gap-4 text-white bg-transparent">
            {/* Title */}
            <TitleInput onChangeHandler={onChangeHandler} />

            {/* Summary */}
            <SummaryInput onChangeHandler={onChangeHandler} />

            {/* Content */}
            <TinyMceEditor ref={editorRef} />

            {/* Tags */}
            <div className="w-full">
                <div className="flex flex-wrap gap-4 mb-6 mt-5 text-white">
                    {tags.map((item, index) => {
                        return (
                            <div
                                className="px-4 py-2 rounded-lg bg-gray-700"
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
                            className="input w-full bg-gray-700"
                            placeholder="Tag"
                            onChange={(e) => setInputTag(e.target.value)}
                            value={inputTag}
                        />
                        <span className="btn btn-neutral" onClick={addTag}>
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
                            onClick={() => setIsPublished(false)}
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
                            onClick={() => setIsPublished(true)}
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
                className="btn btn-warning rounded-full mt-9"
                type="submit"
                disabled={isLoading}
                onClick={createBlog}
            >
                {isLoading ? <Spinner /> : "Create"}
            </button>
        </div>
    );

    function removeTag(tag) {
        setTags(tags.filter((t) => t !== tag));
    }
    function addTag() {
        if (inputTag.trim()) {
            setTags([inputTag, ...tags]);
            setInputTag("");
        }
    }
    function onChangeHandler(e) {
        const { name, value } = e.target;
        setData({ ...data, [name]: value });
    }
}
