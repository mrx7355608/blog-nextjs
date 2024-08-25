"use client";
import { useFormStatus } from "react-dom";
import Spinner from "../Spinner";

export default function DeleteBlogButton() {
    const { pending } = useFormStatus();
    return (
        <button className="btn btn-error btn-sm" disabled={pending}>
            {pending ? <Spinner /> : "Delete"}
        </button>
    );
}
