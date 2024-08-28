export default function TagsList({ tags }) {
    return (
        <div className="flex flex-wrap gap-2 mt-2">
            {tags.map((tag, index) => (
                <span
                    key={index}
                    className="text-md font-normal bg-transparent border px-3 py-1 pt-1.5 text-gray-200 rounded-[5px] tracking-wide border-gray-200"
                >
                    {tag}
                </span>
            ))}
        </div>
    );
}
