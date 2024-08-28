import BlogsList from "@/components/blogs/BlogsList";
import Searchbar from "@/components/navbar/Searchbar";
import { getBlogs } from "@/lib/data";

export default async function page({ searchParams }) {
    const q = searchParams?.q || "";
    const blogs = await getBlogs(q);

    return (
        <div className="w-full max-w-4xl">
            <Searchbar />
            <BlogsList blogs={blogs} />
        </div>
    );
}
