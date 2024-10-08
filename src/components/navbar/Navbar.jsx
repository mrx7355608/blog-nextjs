import Link from "next/link";
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";
import { HiMenuAlt3 } from "react-icons/hi";
import Searchbar from "./Searchbar";
import MobMenu from "./MobMenu";
import Image from "next/image";

export default function Navbar() {
    return (
        <header className="w-full border border-b-gray-700 border-l-transparent border-t-transparent border-r-transparent">
            <nav className="flex  max-w-4xl justify-between items-center py-2 bg-gray-0  mx-auto">
                <Link href="/">
                    <Image
                        src={"/logo.png"}
                        alt="logo"
                        width={55}
                        height={55}
                    />
                </Link>
                <MobMenu />
                <div className="hidden lg:flex items-center gap-6 text-gray-200 mr-4">
                    <Link
                        href="https://www.facebook.com/fdas23/"
                        target="_blank"
                    >
                        <FaFacebook size={20} color="inherit" />
                    </Link>
                    <Link
                        href="https://www.instagram.com/fawadimran/"
                        target="_blank"
                    >
                        <FaInstagram size={20} color="inherit" />
                    </Link>
                    <Link href="" target="_blank">
                        <FaTwitter size={20} color="inherit" />
                    </Link>
                    <Link
                        href="https://www.linkedin.com/in/fawad-imran-22b0542b3/"
                        target="_blank"
                    >
                        <FaLinkedin size={20} color="inherit" />
                    </Link>
                </div>

                <label
                    htmlFor="my-drawer-4"
                    className="lg:hidden drawer-button btn btn-outline text-white bg-zinc-900 border-none"
                >
                    <HiMenuAlt3 size={24} color="inherit" />
                </label>
            </nav>
        </header>
    );
}
