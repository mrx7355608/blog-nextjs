export default function SingleBlogTag({ tag }) {
    return (
        <span className="font-bold text-md bg-transparent border-2 border-cyan-400 px-5 rounded-full py-1 text-cyan-400">
            {tag}
        </span>
    );
}
