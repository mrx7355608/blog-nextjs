import React from "react";

export default function SummaryInput({ onChangeHandler, summary }) {
    return (
        <textarea
            name="summary"
            rows={4}
            className="textarea resize-none bg-gray-100 text-md"
            placeholder="Summary"
            onChange={onChangeHandler}
            value={summary}
        ></textarea>
    );
}
