export default function TagsList({ tags }) {
    return (
        <div className="flex flex-wrap gap-1 mt-2">
            {tags.map((tag, index) => (
                <span
                    key={index}
                    className="text-sm font-normal bg-gray-700 border-0 px-4 py-1 text-gray-400 rounded-full tracking-wide"
                >
                    {tag}
                </span>
            ))}
        </div>
    );
}
