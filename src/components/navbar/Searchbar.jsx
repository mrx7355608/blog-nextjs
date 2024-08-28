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
        <form className="relative w-full">
            <input
                type="text"
                className="input bg-gray-700 text-gray-200 font-medium w-full px-4 pr-8"
                placeholder="Search"
                onChange={handleSearch}
            />
            <button
                type="button"
                className="btn rounded-full btn-sm bg-transparent border-none absolute top-2 right-1 text-gray-500"
            >
                <FaSearch size={15} color="whitesmoke" />
            </button>
        </form>
    );
}
