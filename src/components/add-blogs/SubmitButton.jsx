"use client";
import { useFormStatus } from "react-dom";

export default function SubmitButton() {
    const { pending } = useFormStatus();

    return (
        <button
            className="btn btn-success rounded-full mt-9"
            type="submit"
            disabled={pending}
        >
            {pending ? <Spinner /> : "Create"}
        </button>
    );
}

function Spinner() {
    return <span className="loading loading-dots loading-sm"></span>;
}
