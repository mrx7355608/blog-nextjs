import React from "react";

export default function PublishUnpublishInput({ setBlog }) {
    return (
        <>
            <div className="form-control mt-8">
                <label className="label cursor-pointer">
                    <span className="label-text">Draft</span>
                    <input
                        type="radio"
                        name="is_published"
                        value="no"
                        className="radio checked:bg-red-500"
                        onClick={() =>
                            setBlog((prev) => ({
                                ...prev,
                                is_published: false,
                            }))
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
                            setBlog((prev) => ({
                                ...prev,
                                is_published: true,
                            }))
                        }
                    />
                </label>
            </div>
        </>
    );
}
