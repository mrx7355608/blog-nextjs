import BlogsList from "@/components/blogs/BlogsList";
import Searchbar from "@/components/navbar/Searchbar";
import { getBlogs } from "@/lib/data";

export default async function page({ searchParams }) {
    const q = searchParams?.q || "";
    const blogs = await getBlogs(q);

    return (
        <div>
            <Searchbar />
            <BlogsList blogs={blogs} />
        </div>
    );
}
