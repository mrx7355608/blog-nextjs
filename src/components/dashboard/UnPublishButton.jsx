"use client";

import { useFormStatus } from "react-dom";
import Spinner from "../Spinner";

export default function UnPublishButton() {
    const { pending } = useFormStatus();

    return (
        <button className="btn btn-primary btn-sm mx-3">
            {pending ? <Spinner /> : "Un-publish"}
        </button>
    );
}
