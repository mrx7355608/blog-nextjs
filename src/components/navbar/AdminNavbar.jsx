import { signOut } from "@/auth";
import Link from "next/link";

export default function AdminNavbar() {
    return (
        <header className="w-full bg-gray-700">
            <nav className="border-0 p-4 px-8 flex items-center justify-between max-w-4xl mx-auto">
                <div className="font-bold text-lg text-gray-100">
                    <Link
                        href="/dashboard"
                        className="flex items-center space-x-2"
                    >
                        <span>Blog Admin Panel</span>
                    </Link>
                </div>

                <form
                    action={async () => {
                        "use server";
                        await signOut({
                            redirect: true,
                        });
                    }}
                >
                    <button className="btn btn-error" type="submit">
                        Sign Out
                    </button>
                </form>
            </nav>
        </header>
    );
}
