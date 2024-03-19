import Link from "next/link";
import {
    FaSearch,
    FaFacebook,
    FaInstagram,
    FaTwitter,
    FaLinkedin,
} from "react-icons/fa";

export default function MobMenu() {
    return (
        <div className="drawer drawer-end z-40 lg:hidden">
            <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content"></div>
            <div className="drawer-side">
                <label
                    htmlFor="my-drawer-4"
                    aria-label="close sidebar"
                    className="drawer-overlay"
                ></label>
                <div className="menu p-9 w-96 min-h-full bg-zinc-900 text-base-content">
                    {/* Sidebar content here */}

                    <div className="relative text-primary w-full">
                        <input
                            className="input input-bordered input-primary text-primary bg-transparent w-full"
                            placeholder="Search"
                        />
                        <FaSearch
                            color="inherit"
                            className="absolute top-4 right-4"
                        />
                    </div>

                    <Link
                        href=""
                        target="_blank"
                        className="flex items-center gap-3 mt-10 mb-4"
                    >
                        <FaFacebook size={23} />
                        <span className="font-medium text-lg">Facebook</span>
                    </Link>
                    <Link
                        href=""
                        target="_blank"
                        className="flex items-center gap-3"
                    >
                        <FaInstagram size={23} />
                        <span className="font-medium text-lg">Instagram</span>
                    </Link>
                    <Link
                        href=""
                        target="_blank"
                        className="flex items-center gap-3 my-4"
                    >
                        <FaTwitter size={23} />
                        <span className="font-medium text-lg">Twitter</span>
                    </Link>
                    <Link
                        href=""
                        target="_blank"
                        className="flex items-center gap-3"
                    >
                        <FaLinkedin size={24} />
                        <span className="font-medium text-lg">LinkedIn</span>
                    </Link>
                </div>
            </div>
        </div>
    );
}
