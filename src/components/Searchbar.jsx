import { FaSearch } from "react-icons/fa";

export default function Searchbar() {
    return (
        <form className="w-full relative">
            <input
                type="text"
                className="input h-10 text-sm font-medium w-full bg-zinc-900 rounded-full w-52"
                placeholder="Search"
            />
            <button
                type="submit"
                className="btn btn-sm btn-ghost absolute top-1 right-1 text-gray-500"
            >
                <FaSearch size={12} color="gray" />
            </button>
        </form>
    );
}
