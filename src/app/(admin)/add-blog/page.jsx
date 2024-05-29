export default async function AddBlog() {
    return (
        <div className="w-full rounded-lg bg-zinc-950 p-6">
            <form className="w-1/2 mx-auto flex flex-col gap-4">
                <input
                    type="text"
                    name="title"
                    className="input input-bordered input-error bg-transparent"
                    placeholder="Title"
                />
                <textarea
                    name="summary"
                    rows={3}
                    className="textarea textarea-error bg-transparent"
                    placeholder="Summary"
                ></textarea>
                <textarea
                    name="summary"
                    rows={10}
                    className="textarea textarea-error bg-transparent"
                    placeholder="Content"
                ></textarea>
            </form>
        </div>
    );
}
