"use client";
import { deleteBlog } from "@/lib/data";
import { useFormStatus } from "react-dom";
import Spinner from "../Spinner";

export default function DeleteBlogButton({ blogID }) {
    const { pending } = useFormStatus();
    return (
        <button
            className="btn btn-error btn-sm"
            onClick={async () => await deleteBlog(blogID)}
            disabled={pending}
        >
            {pending ? <Spinner /> : "Delete"}
        </button>
    );
}
