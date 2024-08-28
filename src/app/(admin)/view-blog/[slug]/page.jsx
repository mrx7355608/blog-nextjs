import { getOneBlogBySlugForAdmin } from "@/lib/data";
import BlogContent from "@/components/blogs/BlogContent";
import TagsList from "@/components/tags/Tagslist";
import Link from "next/link";

export default async function ViewBlog({ params }) {
    const blog = await getOneBlogBySlugForAdmin(params.slug);

    if (!blog) {
        return (
            <div className="text-center w-full">
                <h3 className="text-red-500 text-4xl font-bold block">
                    Blog not found
                </h3>
                <Link href="/dashboard">
                    <button className="btn btn-link btn-lg text-gray-200 font-normal">
                        Go to dashboard
                    </button>
                </Link>
            </div>
        );
    }
    return (
        <div className="min-h-screen w-full pt-3 ">
            <div className="w-full px-11 lg:px-0 lg:w-2/3 mx-auto">
                <h1 className="text-4xl font-bold mb-1 mt-3 text-white">
                    {blog.title}
                </h1>
                <p className="text-gray-400 text-lg mt-2 mb-3">
                    {new Date(blog.createdAt).toDateString().slice(4)}
                </p>

                <TagsList tags={blog.tags} />

                <BlogContent content={blog.content} />
            </div>
        </div>
    );
}
