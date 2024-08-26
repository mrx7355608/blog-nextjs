import { getOneBlogBySlug } from "@/lib/data";
import BlogContent from "@/components/blogs/BlogContent";

export default async function SingleBlog({ params }) {
    const blog = await getOneBlogBySlug(params.slug);

    return (
        <div className="min-h-screen w-full pt-12 text-center">
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
