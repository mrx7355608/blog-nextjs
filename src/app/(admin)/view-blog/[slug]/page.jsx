import { getOneBlogBySlugForAdmin } from "@/lib/data";
import BlogContent from "@/components/blogs/BlogContent";
import TagsList from "@/components/tags/Tagslist";

export default async function ViewBlog({ params }) {
    const blog = await getOneBlogBySlugForAdmin(params.slug);

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
