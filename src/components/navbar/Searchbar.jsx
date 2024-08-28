"use client";
import { FaSearch } from "react-icons/fa";
import { useDebouncedCallback } from "use-debounce";
import { searchBlogs } from "@/lib/data";
import { usePathname, useSearchParams, useRouter } from "next/navigation";

export default function Searchbar() {
    const searchParams = useSearchParams();
    const { replace } = useRouter();
    const pathname = usePathname();

    const handleSearch = useDebouncedCallback(async (evt) => {
        const params = new URLSearchParams(searchParams);

        if (evt.target.value) {
            params.set("q", evt.target.value);
        } else {
            params.delete("q");
        }
        replace(`${pathname}?${params}`);
    }, 400);

    return (
        <form className="relative">
            <input
                type="text"
                className="input h-10 bg-gray-700 text-sm text-gray-200 font-medium rounded-full w-64 px-4 pr-8"
                placeholder="Search"
                onChange={handleSearch}
            />
            <button
                type="button"
                className="btn rounded-full btn-sm bg-gray-300 absolute top-1 right-1 text-gray-500"
            >
                <FaSearch size={12} color="#2d2d2d" />
            </button>
        </form>
    );
}
