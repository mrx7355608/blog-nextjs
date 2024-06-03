"use client";
import { createPublishedBlog } from "../../lib/data";
import { useState } from "react";
import SubmitButton from "./SubmitButton";

export default function AddBlogForm() {
    const [tags, setTags] = useState([]);
    const [inputTag, setInputTag] = useState("");
    const publishBlog = createPublishedBlog.bind(null, tags);

    return (
        <form
            className="w-1/2 mx-auto flex flex-col gap-4"
            action={publishBlog}
        >
            {/* Title */}
            <input
                type="text"
                name="title"
                className="input"
                placeholder="Title"
            />

            {/* Summary */}
            <textarea
                name="summary"
                rows={3}
                className="textarea resize-none"
                placeholder="Summary"
            ></textarea>

            {/* Content */}
            <textarea
                name="content"
                rows={10}
                className="textarea resize-none"
                placeholder="Content"
            ></textarea>

            {/* Tags */}
            <div className="w-full">
                <div className="flex flex-wrap gap-4 mb-6 mt-5">
                    {tags.map((item, index) => {
                        return (
                            <div
                                className="px-4 py-2 rounded-lg bg-zinc-900"
                                key={index}
                            >
                                <span>{item}</span>
                                <span
                                    onClick={() => removeTag(item)}
                                    className="btn btn-xs btn-error rounded-full p-1 px-2 pb-1.5 ml-2 hover:text-gray-100"
                                >
                                    x
                                </span>
                            </div>
                        );
                    })}
                    <div className="flex gap-3 w-full">
                        <input
                            className="input w-full"
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

            {/* Button */}
            <SubmitButton />
        </form>
    );

    function removeTag(tag) {
        setTags(tags.filter((t) => t !== tag));
    }
    function addTag() {
        setTags([inputTag, ...tags]);
        setInputTag("");
    }
    function onChangeHandler(e) {
        setInputTag(e.target.value);
    }
}
