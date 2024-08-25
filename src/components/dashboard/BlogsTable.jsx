import DeleteBlogButton from "./DeleteBlogButton";
import { deleteBlog, publish, unpublish } from "@/lib/data";
import UnPublishButton from "./UnPublishButton";
import PublishButton from "./PublishButton";

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
                                    <button className="btn btn-info btn-sm">
                                        View
                                    </button>
                                    <button className="btn btn-warning btn-sm">
                                        Edit
                                    </button>

                                    <form
                                        action={async () => {
                                            "use server";
                                            await deleteBlog(blog._id);
                                        }}
                                    >
                                        <DeleteBlogButton />
                                    </form>

                                    {blog.is_published ? (
                                        <UnPublishButton blogId={blog._id} />
                                    ) : (
                                        <form
                                            action={async () => {
                                                "use server";
                                                await publish(blog._id);
                                            }}
                                        >
                                            <PublishButton />
                                        </form>
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
