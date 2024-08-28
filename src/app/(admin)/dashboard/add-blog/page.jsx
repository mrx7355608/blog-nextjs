import AddBlogForm from "../../../../components/add-blogs/AddBlogForm";

export default async function AddBlog() {
    return (
        <div className="w-full rounded-lg p-6 pt-8 text-center">
            <h1 className="text-4xl font-bold mb-8 mt-3 text-gray-100">
                Add Blog
            </h1>
            <AddBlogForm />
        </div>
    );
}
