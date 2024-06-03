import AddBlogForm from "../../../../components/add-blogs/AddBlogForm";

export default async function AddBlog() {
    return (
        <div className="w-full rounded-lg bg-zinc-950 p-6 text-center">
            <h1 className="text-3xl font-bold mb-8 mt-3 text-white">
                Add Blog
            </h1>
            <AddBlogForm />
        </div>
    );
}
