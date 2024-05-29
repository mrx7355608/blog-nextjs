export default function TagsList({ tags }) {
    return (
        <div className="flex flex-wrap gap-1 mt-2">
            {tags.map((tag, index) => (
                <span
                    key={index}
                    className="text-sm font-medium bg-transparent border-2 border-cyan-400 px-4 py-1 text-cyan-400 rounded-full"
                >
                    {tag}
                </span>
            ))}
        </div>
    );
}
