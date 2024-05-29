export default function TagItem({ tag }) {
    return (
        <span className="font-bold text-md bg-transparent border border-cyan-600 px-5 rounded-full py-1 text-cyan-800">
            {tag}
        </span>
    );
}
