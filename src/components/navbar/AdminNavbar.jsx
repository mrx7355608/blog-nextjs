import { signOut } from "@/auth";
import Link from "next/link";

export default function AdminNavbar() {
    return (
        <nav className="bg-white shadow p-4 px-8 flex items-center justify-between">
            <div className="font-bold text-lg text-gray-800">
                <Link href="/dashboard" className="flex items-center space-x-2">
                    <span>Blog Admin Panel</span>
                </Link>
            </div>

            <div className="flex items-center space-x-4">
                <div className="flex items-center gap-2 mr-4">
                    <span className="bg-gray-800 rounded-full w-10 h-10 ltr-gradient(45deg, skyblue, hotpink)"></span>
                    <span className="text-gray-800">Fawad Imran</span>
                </div>
                <form
                    action={async () => {
                        "use server";
                        await signOut({
                            redirect: true,
                        });
                    }}
                >
                    <button
                        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                        type="submit"
                    >
                        Sign Out
                    </button>
                </form>
            </div>
        </nav>
    );
}
