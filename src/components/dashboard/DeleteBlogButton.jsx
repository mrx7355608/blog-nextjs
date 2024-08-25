"use client";
import { useFormStatus } from "react-dom";
import Spinner from "../Spinner";
import { deleteBlog } from "@/lib/data";

export default function DeleteBlogButton({ blogId }) {
    return (
        <form action={async () => await deleteBlog(blogId)}>
            <SubmitButton />
        </form>
    );
}

function SubmitButton() {
    const { pending } = useFormStatus();
    return (
        <button className="btn btn-error btn-sm" disabled={pending}>
            {pending ? <Spinner /> : "Delete"}
        </button>
    );
}
