import Link from "next/link";
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";
import { HiMenuAlt3 } from "react-icons/hi";
import Searchbar from "./Searchbar";
import MobMenu from "./MobMenu";
import Image from "next/image";

export default function Navbar() {
    return (
        <header className="flex justify-between lg:justify-around items-center p-6 px-12 shadow bg-black w-full">
            <Link href="/">
                <Image src={"/logo.png"} alt="logo" width={55} height={55} />
            </Link>
            <MobMenu />
            <div className="hidden lg:flex items-center gap-6 text-white mr-4">
                <Link href="https://www.facebook.com/fdas23/" target="_blank">
                    <FaFacebook size={20} />
                </Link>
                <Link
                    href="https://www.instagram.com/fawadimran/"
                    target="_blank"
                >
                    <FaInstagram size={20} />
                </Link>
                <Link href="" target="_blank">
                    <FaTwitter size={20} />
                </Link>
                <Link
                    href="https://www.linkedin.com/in/fawad-imran-22b0542b3/"
                    target="_blank"
                >
                    <FaLinkedin size={20} />
                </Link>
                <Searchbar />
            </div>

            <label
                htmlFor="my-drawer-4"
                className="lg:hidden drawer-button btn btn-outline text-white bg-zinc-900 border-none"
            >
                <HiMenuAlt3 size={24} color="inherit" />
            </label>
        </header>
    );
}
