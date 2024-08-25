"use client";

import { useFormStatus } from "react-dom";
import Spinner from "../Spinner";
import { unpublish } from "@/lib/data";

export default function UnPublishButton({ blogId }) {
    return (
        <form action={async () => await unpublish(blogId)}>
            <SubmitButton />
        </form>
    );
}

function SubmitButton() {
    const { pending } = useFormStatus();
    return (
        <button className="btn btn-primary btn-sm">
            {pending ? <Spinner /> : "Un-publish"}
        </button>
    );
}
