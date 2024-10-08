"use client";

import { useFormStatus } from "react-dom";
import Spinner from "../Spinner";
import { publish } from "@/lib/data";

export default function PublishButton({ blogId }) {
    return (
        <form action={async () => await publish(blogId)}>
            <SubmitButton />
        </form>
    );
}

function SubmitButton() {
    const { pending } = useFormStatus();
    return (
        <button className="btn btn-neutral btn-sm">
            {pending ? <Spinner /> : "Publish"}
        </button>
    );
}
