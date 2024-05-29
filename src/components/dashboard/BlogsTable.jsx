import React from "react";

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
                                    <button className="btn btn-error btn-sm">
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    );
                })}
            </table>
        </div>
    );
}
