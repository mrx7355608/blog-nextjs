import BlogsTable from "@/components/dashboard/BlogsTable";
import Searchbar from "@/components/navbar/Searchbar";
import { getBlogsForAdmin } from "@/lib/data";
import Link from "next/link";

export default async function Dashboard({ searchParams }) {
    const q = searchParams?.q || "";
    const blogs = await getBlogsForAdmin(q);

    return (
        <div className="text-gray-800 p-5 px-7 rounded-lg w-full">
            <div className="flex justify-between items-center w-full mb-8">
                <h1 className="text-2xl font-bold text-white">Blogs</h1>
                <div className="flex gap-3 items-center">
                    <Link href="/dashboard/add-blog">
                        <button className="btn btn-info rounded-full px-5 btn-sm inline">
                            Add blog
                        </button>
                    </Link>
                    <Searchbar />
                </div>
            </div>
            <BlogsTable blogs={blogs} />
        </div>
    );
}
