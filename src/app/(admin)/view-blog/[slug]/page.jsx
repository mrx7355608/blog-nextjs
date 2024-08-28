import { getOneBlogBySlugForAdmin } from "@/lib/data";
import BlogContent from "@/components/blogs/BlogContent";

export default async function ViewBlog({ params }) {
    const blog = await getOneBlogBySlugForAdmin(params.slug);

    return (
        <div className="min-h-screen w-full pt-3 text-center">
            <p>for admin</p>
            <div className="w-full px-11 lg:px-0 lg:w-2/3 mx-auto">
                <h1 className="text-4xl font-bold mb-1 text-gray-900 mt-3">
                    {blog.title}
                </h1>
                <p className="text-gray-500 text-lg mt-2 mb-3">
                    {new Date(blog.createdAt).toLocaleDateString()}
                </p>
                <div className="flex flex-wrap gap-2 mb-10 justify-center">
                    {blog.tags.map((tag, index) => (
                        <span
                            key={index}
                            className="font-medium text-md border border-gray-600 px-4 rounded-lg py-1 text-gray-600 tracking-wide"
                        >
                            {tag}
                        </span>
                    ))}
                </div>
                <BlogContent content={blog.content} />
            </div>
        </div>
    );
}
