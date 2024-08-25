"use client";
import { useFormStatus } from "react-dom";
import Spinner from "../Spinner";

export default function SubmitButton() {
    const { pending } = useFormStatus();

    return (
        <button
            className="btn btn-neutral text-white rounded-full mt-9"
            type="submit"
            disabled={pending}
        >
            {pending ? <Spinner /> : "Create"}
        </button>
    );
}
