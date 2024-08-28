import React from "react";

export default function TagsInput({
    tags,
    inputTag,
    setInputTag,
    addTag,
    removeTag,
}) {
    return (
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
    );
}
