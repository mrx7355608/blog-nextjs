"use client";

import { useRef, useState } from "react";
import TinyMceEditor from "./TinyMceEditor";
import Spinner from "../Spinner";

export default function AddBlogForm() {
    const [tags, setTags] = useState([]);
    const [inputTag, setInputTag] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(false);
    const editorRef = useRef();

    async function createBlog() {
        // 1. Validate data
        // 2. Make API request
        // 3. Redirect to dashboard
    }

    return (
        <div className="w-3/4 mx-auto flex flex-col gap-4">
            {/* Title */}
            <input
                type="text"
                name="title"
                className="input bg-gray-100 text-xl"
                placeholder="Title"
            />

            {/* Summary */}
            <textarea
                name="summary"
                rows={4}
                className="textarea resize-none bg-gray-100 text-md"
                placeholder="Summary"
            ></textarea>

            {/* Content */}
            <TinyMceEditor ref={editorRef} />

            {/* Tags */}
            <div className="w-full">
                <div className="flex flex-wrap gap-4 mb-6 mt-5">
                    {tags.map((item, index) => {
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
                            onChange={onChangeHandler}
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
                            defaultChecked
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
                disabled={isLoading}
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
        setInputTag(e.target.value);
    }
}
