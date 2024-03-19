import Image from "next/image";
import { Inter } from "next/font/google";
import BlogCard from "@/components/BlogCard";

const inter = Inter({ subsets: ["latin"] });

export default function Home({ blogs }) {
    return (
        <main
            className={`min-h-screen flex items-start justify-center py-12 px-12 w-full ${inter.className}`}
        >
            <div className="flex items-center justify-start flex-col max-w-4xl">
                {blogs.map((b) => (
                    <BlogCard blog={b} key={b._id} />
                ))}
            </div>
        </main>
    );
}

export async function getStaticProps() {
    const response = await fetch(`${process.env.SERVER_URL}/published`);
    const result = await response.json();
    return {
        props: {
            blogs: result.data,
        },
    };
}
