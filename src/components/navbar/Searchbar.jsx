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
                className="input h-10 bg-gray-100 text-sm font-medium rounded-full w-64 px-4 pr-8"
                placeholder="Search"
                onChange={handleSearch}
            />
            <button
                type="submit"
                className="btn btn-sm btn-ghost absolute top-1 right-1 text-gray-500"
            >
                <FaSearch size={12} />
            </button>
        </form>
    );
}
