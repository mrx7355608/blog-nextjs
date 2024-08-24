"use client";

import { useFormState, useFormStatus } from "react-dom";
import { authenticate } from "@/app/actions";

export default function Login() {
    const [errorMessage, formAction] = useFormState(authenticate, undefined);

    return (
        <div className="flex min-h-screen items-center justify-center p-1 w-full">
            <div className="w-full min-w-md max-w-md">
                <form
                    className="bg-white shadow-md rounded-lg px-7 pt-8 pb-8 mb-4"
                    action={formAction}
                >
                    <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">
                        Login
                    </h2>

                    {errorMessage && (
                        <p className="bg-red-100 text-red-700 font-medium w-full p-2 px-4 mb-4 rounded-sm">
                            {errorMessage}
                        </p>
                    )}
                    <div className="mb-4">
                        <label
                            className="block text-gray-700 text-sm font-bold mb-2"
                            htmlFor="email"
                        >
                            Email
                        </label>
                        <input
                            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 bg-gray-200 leading-tight focus:outline-none focus:shadow-outline"
                            id="email"
                            type="email"
                            placeholder="Enter your email"
                            required
                            name="email"
                        />
                    </div>
                    <div className="mb-6">
                        <label
                            className="block text-gray-700 text-sm font-bold mb-2"
                            htmlFor="password"
                        >
                            Password
                        </label>
                        <input
                            className="bg-gray-200 appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                            id="password"
                            type="password"
                            placeholder="Enter your password"
                            required
                            name="password"
                        />
                    </div>
                    <div className="flex items-center justify-between">
                        <SubmitButton />
                        <a
                            className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
                            href="#"
                        >
                            Forgot Password?
                        </a>
                    </div>
                </form>
            </div>
        </div>
    );
}

function SubmitButton() {
    const { pending } = useFormStatus();
    return (
        <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
            disabled={pending}
        >
            {pending ? "Signing in..." : "Sign In"}
        </button>
    );
}
