import DeleteBlogButton from "./DeleteBlogButton";
import { publish, unpublish } from "@/lib/data";
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
                                <td>
                                    <button className="btn btn-info btn-sm">
                                        View
                                    </button>
                                    <button className="btn btn-warning btn-sm mx-3">
                                        Edit
                                    </button>
                                    <DeleteBlogButton blogID={blog._id} />

                                    {blog.is_published ? (
                                        <form
                                            action={async () => {
                                                "use server";
                                                await unpublish(blog._id);
                                            }}
                                        >
                                            <UnPublishButton />
                                        </form>
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
