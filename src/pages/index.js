import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home({ blogs }) {
    return (
        <main
            className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
        >
            {blogs.map((b) => (
                <h3 key={b._id}>{b.title}</h3>
            ))}
        </main>
    );
}

export async function getStaticProps() {
    const response = await fetch("http://localhost:8000/api/blogs/published");
    const result = await response.json();
    return {
        props: {
            blogs: result.data,
        },
    };
}
