import DeleteBlogButton from "./DeleteBlogButton";
import { deleteBlog, publish, unpublish } from "@/lib/data";
import UnPublishButton from "./UnPublishButton";
import PublishButton from "./PublishButton";
import Link from "next/link";

export default function BlogsTable({ blogs }) {
    return (
        <div className="overflow-x-auto mb-4">
            <table className="table">
                <tbody>
                    <tr>
                        <th>Title</th>
                        <th>Created on</th>
                        <th>Status</th>
                        <th>Actions</th>
                    </tr>
                </tbody>
                {blogs.map((blog) => {
                    return (
                        <tbody key={blog._id}>
                            <tr>
                                <td>{blog.title}</td>
                                <td>
                                    {new Date(blog.createdAt)
                                        .toDateString()
                                        .slice(4)}
                                </td>
                                <td>
                                    {blog.is_published ? "Published" : "Draft"}
                                </td>
                                <td className="flex items-center gap-2">
                                    <Link href={`/blog/${blog.slug}`}>
                                        <button className="btn btn-info btn-sm">
                                            View
                                        </button>
                                    </Link>
                                    <button className="btn btn-warning btn-sm">
                                        Edit
                                    </button>
                                    <DeleteBlogButton blogId={blog._id} />

                                    {blog.is_published ? (
                                        <UnPublishButton blogId={blog._id} />
                                    ) : (
                                        <PublishButton blogId={blog._id} />
                                    )}
                                </td>
                            </tr>
                        </tbody>
                    );
                })}
            </table>
        </div>
    );
}
